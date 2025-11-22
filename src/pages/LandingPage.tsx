import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import ChartView from "@/components/ChartView";
import PromptInput from "@/components/PromptInput";
import ViewToggle from "@/components/ViewToggle";
import { useAppSelector } from "@/store/hooks";
import MainNav from "@/components/MainNav";
import { useEffect } from "react";
import { API_BASE } from "@/config/api";
import { toast } from "sonner";

const LandingPage = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  const [filteredData, setFilteredData] = useState({
    source: [],
    geography: [],
    stakeholder: [],
    drugClass: [],
  });

  const [countryDrugClassMap, setCountryDrugClassMap] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [
          sourceRes,
          geographyRes,
          stakeholderRes,
          drugClassRes,
          countryDrugClassRes,
        ] = await Promise.all([
          fetch(`${API_BASE}/api/source-split`),
          fetch(`${API_BASE}/api/geography-split`),
          fetch(`${API_BASE}/api/stakeholder-split`),
          fetch(`${API_BASE}/api/drug-class-split`),
          fetch(`${API_BASE}/api/country-drug-class-map`),
        ]);
        const [source, geography, stakeholder, drugClass, countryDrugClass] =
          await Promise.all([
            sourceRes.ok ? sourceRes.json() : [],
            geographyRes.ok ? geographyRes.json() : [],
            stakeholderRes.ok ? stakeholderRes.json() : [],
            drugClassRes.ok ? drugClassRes.json() : [],
            countryDrugClassRes.ok ? countryDrugClassRes.json() : {},
          ]);
        setFilteredData({
          source: Array.isArray(source) ? source : [],
          geography: Array.isArray(geography) ? geography : [],
          stakeholder: Array.isArray(stakeholder) ? stakeholder : [],
          drugClass: Array.isArray(drugClass) ? drugClass : [],
        });
        setCountryDrugClassMap(countryDrugClass || {});
      } catch {
        setFilteredData({
          source: [],
          geography: [],
          stakeholder: [],
          drugClass: [],
        });
        setCountryDrugClassMap({});
      }
    };
    fetchAll();
  }, []);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Backend-driven results (from /query) -- mirrors PatientJourney behavior
  const [backendResults, setBackendResults] = useState<any[] | null>(null);
  const [backendHeading, setBackendHeading] = useState<string | null>(null);
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState<string | null>(null);

  const handlePromptSubmit = async (prompt: string) => {
    // Use backend to generate query + results, similarly to PatientJourney
    toast.success("Analyzing your prompt...", {
      description: `"${prompt}"`,
    });

    setBackendError(null);
    setBackendLoading(true);
    setBackendResults(null);
    setBackendHeading(null);

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

  const counts = useAppSelector((s) => s.sampleCounts || {});

  const sampleAsthmaMentions = counts.asthmaDrugMentions ?? 0;

  const metricCardsConfig = [
    {
      title: "Countries in Scope",
      value: counts.countriesInScope ? counts.countriesInScope.length : 0,
      description: counts.countriesInScope
        ? counts.countriesInScope.join(", ")
        : "",
    },
    {
      title: "Asthma Sources",
      value: counts.asthmaSources ?? 0,
      description: "Across all channels",
    },
    {
      title: "Total Asthma Conversations",
      value: counts.totalAsthmaConversations ?? 0,
      description: "Mentions across all platforms",
    },
    {
      title: "Asthma Drug Mentions",
      value: counts.asthmaDrugMentions ?? 0,
      description: "Across all drugs",
    },
    {
      title: "Biologics Drug Mentions",
      value: counts.biologicsDrugMentions ?? 0,
      description: "Mentions for biologic treatments",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://multiplierai.co/se/multiplier_logo.png"
              alt="multiplier_logo"
              className="h-18 w-44"
            />
          </div>

          {/* Main navigation */}
          <MainNav />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Metric Card */}
        <div className="max-w-md">
          <MetricCard
            title="Total Asthma Drug Mentions"
            value={counts.asthmaDrugMentions ?? 0}
            icon={Activity}
            description="Across all sources and stakeholders"
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricCardsConfig.map((card, index) => (
            <MetricCard
              key={index}
              title={card.title}
              value={card.value}
              icon={Activity}
              description={card.description}
            />
          ))}
        </div> */}

        {/* Prompt Input */}
        {/* <div className="bg-card p-6 rounded-2xl border-2 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-foreground">Ask a Question</h2>
          <PromptInput
            onSubmit={handlePromptSubmit}
            placeholder='Try: "Show Positive sentiment split by country" or "Compare Negative sentiment across drug classes"'
          />
        </div> */}

        {/* Data Tabs (replaced by backend results when present) */}
        {backendLoading ? (
          <div className="bg-card p-6 rounded-2xl border-2">
            Loading results from backend...
          </div>
        ) : backendResults ? (
          <div className="bg-card p-6 rounded-2xl border-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                {backendHeading}
              </h3>
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

            {view === "table" ? (
              <DataTable
                data={backendResults}
                columns={["drug_name", "mentions", "sentiment"]}
                sentimentColumns
              />
            ) : (
              <ChartView data={backendResults} type="bar" />
            )}
          </div>
        ) : (
          <Tabs defaultValue="source" className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <TabsList className="bg-muted p-1 h-auto">
                <TabsTrigger value="source" className="rounded-lg">
                  Source
                </TabsTrigger>
                <TabsTrigger value="geography" className="rounded-lg">
                  Geography
                </TabsTrigger>
                <TabsTrigger value="stakeholder" className="rounded-lg">
                  Stakeholder
                </TabsTrigger>
                <TabsTrigger value="drugClass" className="rounded-lg">
                  Drug Class
                </TabsTrigger>
              </TabsList>
              <ViewToggle view={view} onViewChange={setView} />
            </div>

            <TabsContent value="source" className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border-2">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Source Split
                </h3>
                {view === "table" ? (
                  <DataTable
                    data={filteredData.source}
                    columns={["type", "mentions", "sentiment"]}
                    sentimentColumns
                  />
                ) : (
                  <ChartView data={filteredData.source} type="bar" />
                )}
              </div>
            </TabsContent>

            <TabsContent value="geography" className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border-2">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Geography Split
                </h3>
                {selectedCountry ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-md font-semibold text-foreground">
                        Drug Class Split for {selectedCountry}
                      </h4>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedCountry(null)}
                      >
                        Back
                      </Button>
                    </div>
                    {view === "table" ? (
                      <DataTable
                        data={
                          (countryDrugClassMap as any)[
                            selectedCountry as string
                          ] || []
                        }
                        columns={["type", "mentions", "sentiment"]}
                        sentimentColumns
                      />
                    ) : (
                      <ChartView
                        data={
                          (countryDrugClassMap as any)[
                            selectedCountry as string
                          ] || []
                        }
                        type="bar"
                      />
                    )}
                  </>
                ) : (
                  <>
                    {view === "table" ? (
                      <DataTable
                        data={filteredData.geography}
                        columns={["country", "mentions", "sentiment"]}
                        sentimentColumns
                        // @ts-ignore
                        onRowClick={(row) => setSelectedCountry(row.country)}
                      />
                    ) : (
                      <ChartView data={filteredData.geography} type="bar" />
                    )}
                  </>
                )}
              </div>
            </TabsContent>

            <TabsContent value="stakeholder" className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border-2">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Stakeholder Split
                </h3>
                {view === "table" ? (
                  <DataTable
                    data={filteredData.stakeholder}
                    columns={["group", "mentions", "sentiment"]}
                    sentimentColumns
                  />
                ) : (
                  <ChartView data={filteredData.stakeholder} type="bar" />
                )}
              </div>
            </TabsContent>

            <TabsContent value="drugClass" className="space-y-4">
              <div className="bg-card p-6 rounded-2xl border-2">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Drug Class Split
                </h3>
                {view === "table" ? (
                  <DataTable
                    data={filteredData.drugClass}
                    columns={["type", "mentions", "sentiment"]}
                    sentimentColumns
                  />
                ) : (
                  <ChartView data={filteredData.drugClass} type="bar" />
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  );
};

export default LandingPage;
