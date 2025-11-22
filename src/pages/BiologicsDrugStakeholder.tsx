import { useState, useEffect } from "react";
import { Activity, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import ChartView from "@/components/ChartView";
import ViewToggle from "@/components/ViewToggle";
import InsightsSidebar from "@/components/InsightsSidebar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { API_BASE } from "@/config/api";
import MainNav from "@/components/MainNav";
import { useLocation } from "react-router-dom";
import BiologicsSubNav from "@/components/BiologicsSubNav";
import { useAppSelector } from "@/store/hooks";

const BiologicsDrugStakeholder = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  // fetch country drug data from backend
  const [countryDrugData, setCountryDrugData] = useState<any>({});
  useEffect(() => {
    const fetchDrugData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/drug-stakeholders`);
        if (!res.ok) {
          console.error("Failed to fetch drug stakeholder data", res.status);
          return;
        }
        const data = await res.json();
        setCountryDrugData(data || {});
        // If the backend returned a country-keyed object and the current selectedCountry
        // is not present, choose a sensible default so the table updates (prefer 'All').
        if (data && !Array.isArray(data) && typeof data === "object") {
          const keys = Object.keys(data);
          if (!keys.includes(selectedCountry)) {
            const newSel = keys.includes("All") ? "All" : keys[0];
            setSelectedCountry(newSel);
          }
        }
      } catch (e) {
        console.error("Error fetching drug stakeholder data", e);
      }
    };
    fetchDrugData();
  }, []);

  // Data for the currently selected country (fallback to All)
  let dataForCountry: any[] = [];
  if (Array.isArray(countryDrugData)) {
    dataForCountry = countryDrugData;
  } else {
    dataForCountry =
      (countryDrugData &&
        (countryDrugData[selectedCountry] || countryDrugData["All"])) ||
      [];
  }

  // Normalize to a flat list of drugs. The API may return either:
  // - an array of drug objects: [{ drugName, attributes: [...] }, ...]
  // - an array of type-groups: [{ asthama_type, drugs: [ { drugName, attributes }, ... ] }, ...]
  const drugsList: any[] = Array.isArray(dataForCountry)
    ? dataForCountry.length > 0 &&
      (dataForCountry[0].drugs || dataForCountry[0].drugName)
      ? // if first element has `drugs` array, flatten groups
        dataForCountry.flatMap((g) => (g.drugs ? g.drugs : g))
      : dataForCountry
    : [];

  // 🔹 Get biologics list from Redux sampleCounts
  const counts = useAppSelector((s) => (s as any).sampleCounts || {});
  const biologicsList: string[] =
    (counts as any).Biologics ||
    (counts as any).biologics ||
    (counts as any).biologicsList ||
    [];
  const biologicsSet = new Set((biologicsList || []).map((b: string) => b));

  // 🔹 Filter drugsList to only include biologics
  const biologicsDrugsList = drugsList.filter((d) =>
    biologicsSet.has(d.drugName)
  );

  // 🔹 Build stakeholder-columns table from biologics-only drugs list
  const stakeholders: string[] = Array.from(
    new Set(
      biologicsDrugsList.flatMap((d) =>
        (d.attributes || []).map((a) => a.stakeholder)
      )
    )
  );

  const tableRows = biologicsDrugsList.map((d) => {
    const row: any = { drugName: d.drugName };
    stakeholders.forEach((s) => {
      const attr = (d.attributes || []).find((a) => a.stakeholder === s);
      if (attr) {
        // store strings "Pct (count)" so DataTable can render them directly
        row[s] = {
          Positive: `${attr.PositivePct} (${attr.Positive})`,
          Negative: `${attr.NegativePct} (${attr.Negative})`,
          Neutral: `${attr.NeutralPct} (${attr.Neutral})`,
        };
      } else {
        // show 0% (0) when data missing
        row[s] = { Positive: "0% (0)", Negative: "0% (0)", Neutral: "0% (0)" };
      }
    });
    return row;
  });

  const [filteredJourney, setFilteredJourney] = useState(tableRows);
  // Keep filteredJourney in sync when the selected country or tableRows change
  useEffect(() => setFilteredJourney(tableRows), [selectedCountry]);
  // Also update filteredJourney when the tableRows change (e.g. after fetching)
  useEffect(() => setFilteredJourney(tableRows), [tableRows]);
  const [selectedStage, setSelectedStage] = useState<string | null>(null); // selected drugName

  // 🔹 Total mentions across biologics drugs/stakeholders (for selected country)
  const totalMentions = biologicsDrugsList
    .flatMap((d) => (d.attributes || []).map((a) => a.mentions))
    .reduce((sum, v) => sum + (v || 0), 0);

  // 🔹 Aggregated numeric sentiment per biologics drug for charts
  const chartData = biologicsDrugsList.map((d) => ({
    type: d.drugName,
    Positive: (d.attributes || []).reduce((s, a) => s + (a.Positive || 0), 0),
    Negative: (d.attributes || []).reduce((s, a) => s + (a.Negative || 0), 0),
    Neutral: (d.attributes || []).reduce((s, a) => s + (a.Neutral || 0), 0),
  }));

  const [backendResults, setBackendResults] = useState<any[] | null>(null);
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [backendHeading, setBackendHeading] = useState<string | null>(null);

  const handlePromptSubmit = async (prompt: string) => {
    toast.success("Analyzing patient journey...", {
      description: `"${prompt}"`,
    });
    setBackendError(null);
    setBackendLoading(true);
    setBackendResults(null);

    try {
      const res = await fetch(`${API_BASE}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const msg = err.error || err.message || `HTTP ${res.status}`;
        setBackendError(msg);
        toast.error("Backend error: " + msg);
        setBackendLoading(false);
        return;
      }

      const body = await res.json();
      // backend returns { query_used, results, heading }
      const results = body.results || [];
      const heading = body.heading || "Backend Results";
      setBackendResults(results);
      setBackendHeading(heading);
      if (results.length === 0) {
        toast.info("No matching data returned from backend.");
      } else {
        toast.success("Backend returned results.");
      }
    } catch (e: any) {
      setBackendError(e?.message || String(e));
      toast.error("Request failed: " + (e?.message || String(e)));
    } finally {
      setBackendLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Asthma Drug Analysis
              </h1>
              <p className="text-sm text-muted-foreground">
                Patient Journey Deep Dive
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MainNav />
          </div>
        </div>
      </header>

      {(() => {
        try {
          const params = new URLSearchParams(
            (useLocation() as any).search || ""
          );
          if (params.get("active") === "/biologics") {
            return <BiologicsSubNav activeSub="biodrug" />;
          }
        } catch (e) {
          /* ignore */
        }
        return null;
      })()}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Metric Card */}
            <div className="max-w-md">
              <MetricCard
                title="Total Biologics Mentions (Stakeholders)"
                value={totalMentions}
                icon={Activity}
                description="Sum of mentions across biologic drugs and stakeholders"
              />
            </div>

            {/* Country filter bar */}
            <div>
              <div className="container mx-auto px-2 flex justify-start">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-muted-foreground">
                    Country
                  </label>
                  <Select
                    value={selectedCountry}
                    onValueChange={(val) => setSelectedCountry(val)}
                  >
                    <SelectTrigger className="w-56">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      {(!Array.isArray(countryDrugData) &&
                      countryDrugData &&
                      typeof countryDrugData === "object"
                        ? Object.keys(countryDrugData)
                        : ["All"]
                      ).map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Drug Stakeholder Data */}
            <div className="bg-card p-6 rounded-2xl border-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Drug Stakeholder Data (Biologics Only)
                  </h3>
                </div>
                <ViewToggle view={view} onViewChange={setView} />
              </div>

              {view === "table" ? (
                backendLoading ? (
                  <div className="p-6">Loading results from backend...</div>
                ) : backendResults ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">
                        {backendHeading}
                      </span>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setBackendResults(null);
                            setBackendHeading(null);
                          }}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                    <DataTable
                      data={backendResults}
                      columns={["drug_name", "mentions", "sentiment"]}
                      sentimentColumns
                    />
                  </div>
                ) : selectedStage ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">
                        {selectedStage}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedStage(null)}
                        className="flex items-center gap-1"
                      >
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                    </div>

                    {/* Show attributes for the selected biologic drug */}
                    <DataTable
                      data={(() => {
                        const drug = biologicsDrugsList.find(
                          (d) => d.drugName === selectedStage
                        );
                        if (!drug) return [];
                        return (drug.attributes || []).map((a: any) => ({
                          stakeholder: a.stakeholder,
                          mentions: a.mentions,
                          sentiment: {
                            Positive: a.Positive,
                            Negative: a.Negative,
                            Neutral: a.Neutral,
                          },
                        }));
                      })()}
                      columns={["stakeholder", "mentions", "sentiment"]}
                      sentimentColumns
                    />
                  </div>
                ) : (
                  <DataTable
                    data={filteredJourney}
                    // first column is Drug Name, then one column per stakeholder
                    columns={["drugName", ...stakeholders]}
                    sentimentColumns
                    onRowClick={(row) => setSelectedStage(row.drugName)}
                  />
                )
              ) : (
                <ChartView data={chartData} type="bar" />
              )}
            </div>
          </div>

          {/* Insights Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Key Insights
              </h3>
              <InsightsSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BiologicsDrugStakeholder;
