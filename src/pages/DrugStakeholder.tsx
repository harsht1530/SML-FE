import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import ChartView from "@/components/ChartView";
import PromptInput from "@/components/PromptInput";
import ViewToggle from "@/components/ViewToggle";
import InsightsSidebar from "@/components/InsightsSidebar";
import { drugStakeholderData as countryDrugData } from "@/data/drugStakeholderData";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

const DrugStakeholder = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  // Country filter state — data file (`drugStakeholderData.js`) contains country keys like "All", "United Kingdom", etc.
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  // Data for the currently selected country (fallback to All)
  const dataForCountry = countryDrugData[selectedCountry] || countryDrugData["All"] || [];

  // Build stakeholder-columns table from country-specific data
  const stakeholders: string[] = Array.from(new Set(dataForCountry.flatMap((d) => d.attributes.map((a) => a.stakeholder))));

  const tableRows = dataForCountry.map((d) => {
    const row: any = { drugName: d.drugName };
    stakeholders.forEach((s) => {
      const attr = d.attributes.find((a) => a.stakeholder === s);
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
  const [selectedStage, setSelectedStage] = useState<string | null>(null); // selected drugName

  // Total mentions across all drugs/stakeholders (for selected country)
  const totalMentions = dataForCountry.flatMap((d) => d.attributes.map((a) => a.mentions)).reduce((sum, v) => sum + (v || 0), 0);

  // Aggregated numeric sentiment per drug for charts
  const chartData = dataForCountry.map((d) => ({
    type: d.drugName,
    Positive: d.attributes.reduce((s, a) => s + (a.Positive || 0), 0),
    Negative: d.attributes.reduce((s, a) => s + (a.Negative || 0), 0),
    Neutral: d.attributes.reduce((s, a) => s + (a.Neutral || 0), 0),
  }));

  const [backendResults, setBackendResults] = useState<any[] | null>(null);
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);
  const [backendHeading, setBackendHeading] = useState<string | null>(null);

  const handlePromptSubmit = async (prompt: string) => {
    toast.success("Analyzing patient journey...", { description: `"${prompt}"` });
    setBackendError(null);
    setBackendLoading(true);
    setBackendResults(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/query", {
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
              <h1 className="text-2xl font-bold text-foreground">Asthma Drug Analysis</h1>
              <p className="text-sm text-muted-foreground">Patient Journey Deep Dive</p>
            </div>
          </div>
          {/* <Link to="/patient-journey">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link> */}

               {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/patient-journey">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>

            <Link to="/asthematype">
              <Button>
                Asthma Stakeholder
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>


      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Metric Card */}
            <div className="max-w-md">
              <MetricCard
                title="Total Asthma Mentions (Stakeholders)"
                value={totalMentions}
                icon={Activity}
                description="Sum of mentions across drugs and stakeholders"
              />
            </div>

      {/* Country filter bar (moved to top after header) */}
      <div >
        <div className="container mx-auto px-2 flex justify-start">
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Country</label>
            <Select value={selectedCountry} onValueChange={(val) => setSelectedCountry(val)}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(countryDrugData).map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
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
                  <h3 className="text-lg font-semibold text-foreground">Drug Stakeholder Data</h3>
                </div>
                <ViewToggle view={view} onViewChange={setView} />
              </div>

              {view === "table" ? (
                backendLoading ? (
                  <div className="p-6">Loading results from backend...</div>
                ) : backendResults ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">{backendHeading}</span>
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
                    <DataTable data={backendResults} columns={["drug_name", "mentions", "sentiment"]} sentimentColumns />
                  </div>
                ) : selectedStage ? (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-foreground">{selectedStage}</span>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedStage(null)} className="flex items-center gap-1">
                        <ArrowLeft className="h-4 w-4" /> Back
                      </Button>
                    </div>

                    {/* Show attributes for the selected drug */}
                    <DataTable
                      data={(() => {
                        const drug = dataForCountry.find((d) => d.drugName === selectedStage);
                        if (!drug) return [];
                        return drug.attributes.map((a) => ({
                          stakeholder: a.stakeholder,
                          mentions: a.mentions,
                          sentiment: { Positive: a.Positive, Negative: a.Negative, Neutral: a.Neutral },
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
              <h3 className="text-xl font-semibold mb-4 text-foreground">Key Insights</h3>
              <InsightsSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DrugStakeholder;
