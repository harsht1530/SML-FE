import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import ChartView from "@/components/ChartView";
import PromptInput from "@/components/PromptInput";
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

const BiologicsAsthmaType = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  // ---- Country drug data (base) ----
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

  // available countries (only keys that have data). If backend returned an array, default to ["All"]
  let availableCountries: string[] = [];
  if (
    !Array.isArray(countryDrugData) &&
    countryDrugData &&
    typeof countryDrugData === "object"
  ) {
    availableCountries = Object.keys(countryDrugData).filter((c) => {
      const v = (countryDrugData as any)[c];
      return (
        v &&
        ((Array.isArray(v) && v.length > 0) ||
          (typeof v === "object" && Object.keys(v).length > 0))
      );
    });
  } else {
    availableCountries = ["All"];
  }

  // ---- Get biologics list from Redux ----
  const sampleCounts = useAppSelector((s) => (s as any).sampleCounts || {});
  const biologicsList: string[] =
    (sampleCounts as any).Biologics ||
    (sampleCounts as any).biologics ||
    (sampleCounts as any).biologicsList ||
    [];
  const biologicsSet = new Set((biologicsList || []).map((b: string) => b));

  const filterToBiologics = (drugs: any[]): any[] =>
    biologicsSet.size
      ? drugs.filter((d) => biologicsSet.has(d.drugName))
      : drugs;

  // ---- Build stakeholder-columns table from country-specific data (biologics-only) ----
  const biologicsCountryDrugs = filterToBiologics(dataForCountry);

  const stakeholders: string[] = Array.from(
    new Set(
      biologicsCountryDrugs.flatMap((d) =>
        (d.attributes || []).map((a: any) => a.stakeholder)
      )
    )
  );

  const tableRows = biologicsCountryDrugs.map((d) => {
    const row: any = { drugName: d.drugName };
    stakeholders.forEach((s) => {
      const attr = (d.attributes || []).find((a: any) => a.stakeholder === s);
      if (attr) {
        row[s] = {
          Positive: `${attr.PositivePct} (${attr.Positive})`,
          Negative: `${attr.NegativePct} (${attr.Negative})`,
          Neutral: `${attr.NeutralPct} (${attr.Neutral})`,
        };
      } else {
        row[s] = { Positive: "0% (0)", Negative: "0% (0)", Neutral: "0% (0)" };
      }
    });
    return row;
  });

  const [filteredJourney, setFilteredJourney] = useState(tableRows);
  useEffect(() => setFilteredJourney(tableRows), [selectedCountry]);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

  // 🔹 Total mentions across biologic drugs/stakeholders (for selected country)
  const totalMentions = biologicsCountryDrugs
    .flatMap((d) => (d.attributes || []).map((a: any) => a.mentions))
    .reduce((sum, v) => sum + (v || 0), 0);

  // Aggregated numeric sentiment per biologics drug for charts
  const chartData = biologicsCountryDrugs.map((d) => ({
    type: d.drugName,
    Positive: (d.attributes || []).reduce(
      (s: number, a: any) => s + (a.Positive || 0),
      0
    ),
    Negative: (d.attributes || []).reduce(
      (s: number, a: any) => s + (a.Negative || 0),
      0
    ),
    Neutral: (d.attributes || []).reduce(
      (s: number, a: any) => s + (a.Neutral || 0),
      0
    ),
  }));

  // --- Asthma attribute table (biologics only) ---
  const [asthmaAttributeData, setAsthmaAttributeData] = useState<any>({});

  useEffect(() => {
    const fetchAttributes = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/asthma-attributes`);
        if (!res.ok) {
          console.error("Failed to fetch asthma attributes", res.status);
          return;
        }
        const data = await res.json();
        setAsthmaAttributeData(data || {});
      } catch (e) {
        console.error("Error fetching asthma attributes", e);
      }
    };
    fetchAttributes();
  }, []);

  let attributeDataForCountry: any[] = [];
  if (Array.isArray(asthmaAttributeData)) {
    attributeDataForCountry = asthmaAttributeData;
  } else {
    attributeDataForCountry =
      (asthmaAttributeData &&
        (asthmaAttributeData[selectedCountry] || asthmaAttributeData["All"])) ||
      [];
  }

  const attributeColumnsSet = new Set<string>();
  attributeDataForCountry.forEach((t) =>
    t.drugs.forEach((d: any) =>
      d.attributes.forEach((a: any) => attributeColumnsSet.add(a.attribute))
    )
  );
  const attributeColumns = Array.from(attributeColumnsSet);

  const attributeRows: any[] = [];
  attributeDataForCountry.forEach((typeGroup) => {
    const asthmaType = typeGroup.asthma_type || typeGroup.asthmaType || "";

    // 🔹 Only biologic drugs for this asthma type
    const biologicDrugs = filterToBiologics(typeGroup.drugs || []);

    biologicDrugs.forEach((drug: any, idx: number) => {
      const row: any = {
        asthmaType: idx === 0 ? asthmaType : "",
        treatmentOption: drug.drugName,
      };
      attributeColumns.forEach((attrName) => {
        const attr = (drug.attributes || []).find(
          (a: any) => a.attribute === attrName
        );
        if (attr) {
          row[attrName] = {
            Positive: `${attr.PositivePct} (${attr.Positive})`,
            Negative: `${attr.NegativePct} (${attr.Negative})`,
            Neutral: `${attr.NeutralPct} (${attr.Neutral})`,
          };
        } else {
          row[attrName] = {
            Positive: "0% (0)",
            Negative: "0% (0)",
            Neutral: "0% (0)",
          };
        }
      });
      attributeRows.push(row);
    });
  });

  // --- Asthma stakeholder table (biologics only) ---
  const [asthmaStakeholderData, setAsthmaStakeholderData] = useState<any>({});

  useEffect(() => {
    const fetchStakeholders = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/asthma-stakeholders`);
        if (!res.ok) {
          console.error("Failed to fetch asthma stakeholder data", res.status);
          return;
        }
        const data = await res.json();
        setAsthmaStakeholderData(data || {});
      } catch (e) {
        console.error("Error fetching asthma stakeholder data", e);
      }
    };
    fetchStakeholders();
  }, []);

  let stakeholderDataForCountry: any[] = [];
  if (Array.isArray(asthmaStakeholderData)) {
    stakeholderDataForCountry = asthmaStakeholderData;
  } else {
    stakeholderDataForCountry =
      (asthmaStakeholderData &&
        (asthmaStakeholderData[selectedCountry] ||
          asthmaStakeholderData["All"])) ||
      [];
  }

  const stakeholderSet = new Set<string>();
  stakeholderDataForCountry.forEach((t) =>
    t.drugs.forEach((d: any) =>
      d.attributes.forEach((a: any) => stakeholderSet.add(a.stakeholder))
    )
  );
  const stakeholderColumns = Array.from(stakeholderSet);

  const stakeholderRows: any[] = [];
  stakeholderDataForCountry.forEach((typeGroup) => {
    const asthmaType =
      typeGroup.asthama_type ||
      typeGroup.asthma_type ||
      typeGroup.asthmaType ||
      "";

    // 🔹 Only biologic drugs for this asthma type
    const biologicDrugs = filterToBiologics(typeGroup.drugs || []);

    biologicDrugs.forEach((drug: any, idx: number) => {
      const row: any = {
        asthmaType: idx === 0 ? asthmaType : "",
        treatmentOption: drug.drugName,
      };
      stakeholderColumns.forEach((s) => {
        const attr = (drug.attributes || []).find(
          (a: any) => a.stakeholder === s
        );
        if (attr) {
          row[s] = {
            Positive: `${attr.PositivePct} (${attr.Positive})`,
            Negative: `${attr.NegativePct} (${attr.Negative})`,
            Neutral: `${attr.NeutralPct} (${attr.Neutral})`,
          };
        } else {
          row[s] = {
            Positive: "0% (0)",
            Negative: "0% (0)",
            Neutral: "0% (0)",
          };
        }
      });
      stakeholderRows.push(row);
    });
  });

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

      {/* Show Biologics subnav when requested via ?active=/biologics */}
      {(() => {
        try {
          const params = new URLSearchParams(
            (useLocation() as any).search || ""
          );
          if (params.get("active") === "/biologics") {
            return <BiologicsSubNav activeSub="bioasthma" />;
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
                      {availableCountries.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Two tables built from asthma attribute and stakeholder data */}
            <div className="grid grid-cols-1 gap-6 mb-6">
              {/* Attributes table */}
              <div className="bg-card p-6 rounded-2xl border-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Asthma Types — Attributes (Biologics Only)
                  </h3>
                </div>
                <DataTable
                  data={attributeRows}
                  columns={[
                    "asthmaType",
                    "treatmentOption",
                    ...attributeColumns,
                  ]}
                  sentimentColumns
                />
              </div>

              {/* Stakeholders table */}
              <div className="bg-card p-6 rounded-2xl border-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">
                    Asthma Types — Stakeholders (Biologics Only)
                  </h3>
                </div>
                <DataTable
                  data={stakeholderRows}
                  columns={[
                    "asthmaType",
                    "treatmentOption",
                    ...stakeholderColumns,
                  ]}
                  sentimentColumns
                />
              </div>
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

export default BiologicsAsthmaType;
