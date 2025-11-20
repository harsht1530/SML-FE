import { useState } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import ChartView from "@/components/ChartView";
import PromptInput from "@/components/PromptInput";
import ViewToggle from "@/components/ViewToggle";
import InsightsSidebar from "@/components/InsightsSidebar";
import { sampleAsthmaMentions, patientJourney, patientJourneyStageRemarks } from "@/data/mockData";
import { toast } from "sonner";

const StakeholderAttribute = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  const [filteredJourney, setFilteredJourney] = useState(patientJourney);
  const [selectedStage, setSelectedStage] = useState<string | null>(null);

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
          {/* <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Landing
            </Button>
          </Link>
          <Link to="/drugstakeholder">
            <Button variant="outline" className="gap-2">
              
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link> */}

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link to="/landing-page">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>

            <Link to="/drugstakeholder">
              <Button>
                Next
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
                title="Total Asthma Drug Mentions"
                value={sampleAsthmaMentions}
                icon={Activity}
                description="Patient journey analysis"
              />
            </div>

            {/* Prompt Input */}
            {/* <div className="bg-card p-6 rounded-2xl border-2 shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Analyze Journey Stage</h2>
              <PromptInput
                onSubmit={handlePromptSubmit}
                placeholder='Try: "Show symptom onset with Positive and Negative sentiment" or "Compare adherence vs persistence"'
              />
            </div> */}

            {/* Patient Journey Data */}
            <div className="bg-card p-6 rounded-2xl border-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">Patient Journey Stages</h3>
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

                    <DataTable
                      data={(() => {
                        const remarks = patientJourneyStageRemarks[selectedStage];
                        if (!remarks) return [];
                        const rows: any[] = [];
                        for (let i = 0; i < 5; i++) {
                          rows.push({
                            sentiment: {
                              Positive: remarks.Positive[i] || "",
                              Negative: remarks.Negative[i] || "",
                              Neutral: remarks.Neutral[i] || "",
                            },
                          });
                        }
                        return rows;
                      })()}
                      columns={["sentiment"]}
                      sentimentColumns
                    />
                  </div>
                ) : (
                  <DataTable
                    // map each row to include a `sentiment` object so DataTable can
                    // render a single combined sentiment column (badges)
                    data={filteredJourney.map((item) => ({
                      ...item,
                      sentiment: {
                        Positive: item.Positive,
                        Negative: item.Negative,
                        Neutral: item.Neutral,
                      },
                    }))}
                    columns={["stage", "sentiment"]}
                    sentimentColumns
                    onRowClick={(row) => setSelectedStage(row.stage)}
                  />
                )
              ) : (
                <ChartView data={filteredJourney} type="bar" />
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

export default StakeholderAttribute;
  