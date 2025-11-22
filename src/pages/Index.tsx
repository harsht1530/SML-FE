import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, ArrowRight, TrendingUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MetricCard from "@/components/MetricCard";
import DataTable from "@/components/DataTable";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { API_BASE } from "@/config/api";
import MainNav from "@/components/MainNav";

const SENTIMENT_COLORS = {
  Positive: "hsl(var(--positive))",
  Negative: "hsl(var(--negative))",
  Neutral: "hsl(var(--neutral))",
};
import PromptInput from "@/components/PromptInput";
import ViewToggle from "@/components/ViewToggle";
import { useAppSelector } from "@/store/hooks";
import TopThemes from "@/components/TopThemes";
import { toast } from "sonner";

const Index = () => {
  const [view, setView] = useState<"table" | "chart">("table");
  const [filteredData, setFilteredData] = useState({
    source: [],
    geography: [],
    stakeholder: [],
    drugClass: [],
  });

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [sourceRes, geographyRes, stakeholderRes, drugClassRes] =
          await Promise.all([
            fetch(`${API_BASE}/api/source-split`),
            fetch(`${API_BASE}/api/geography-split`),
            fetch(`${API_BASE}/api/stakeholder-split`),
            fetch(`${API_BASE}/api/drug-class-split`),
          ]);
        const [source, geography, stakeholder, drugClass] = await Promise.all([
          sourceRes.ok ? sourceRes.json() : [],
          geographyRes.ok ? geographyRes.json() : [],
          stakeholderRes.ok ? stakeholderRes.json() : [],
          drugClassRes.ok ? drugClassRes.json() : [],
        ]);
        setFilteredData({
          source: Array.isArray(source) ? source : [],
          geography: Array.isArray(geography) ? geography : [],
          stakeholder: Array.isArray(stakeholder) ? stakeholder : [],
          drugClass: Array.isArray(drugClass) ? drugClass : [],
        });
      } catch {
        setFilteredData({
          source: [],
          geography: [],
          stakeholder: [],
          drugClass: [],
        });
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

  // Move this line below the declaration of `counts`

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

  const [sentimentPieData, setSentimentPieData] = useState({
    Positive: { count: 0, percentage: 0 },
    Negative: { count: 0, percentage: 0 },
    Neutral: { count: 0, percentage: 0 },
  });
  useEffect(() => {
    fetch(`${API_BASE}/api/sentiment-pie-data`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data === "object") setSentimentPieData(data);
      });
  }, []);
  const pieChartCount = (counts.asthmaDrugMentions ?? 0).toLocaleString();

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
          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://multiplierai.co/se/multiplier_logo.png"
                alt="multiplier_logo"
                className="h-18 w-44"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* Main navigation (centralized) */}
            {/* Reusable component provides active styling */}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <MainNav />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Metric Card */}
        {/* <div className="max-w-md">
          <MetricCard
            title="Total Asthma Drug Mentions"
            value={counts.asthmaDrugMentions ?? 0}
            icon={Activity}
            description="Across all sources and stakeholders"
          />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metricCardsConfig.map((card, index) => (
            <MetricCard
              key={index}
              title={card.title}
              value={card.value}
              icon={Activity}
              description={card.description}
            />
          ))}
        </div>

        {/* Sentiment Pie Chart and Top Themes side by side */}
        <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Sentiment Distribution
            </h3>

            <div className="bg-card border rounded-md p-4">
              <ChartContainer
                config={{
                  Positive: { label: "Positive", color: "#22c55e" },
                  Negative: { label: "Negative", color: "#ef4444" },
                  Neutral: { label: "Neutral", color: "#eab308" },
                }}
              >
                {/* Use relative wrapper so we can overlay center text on the donut */}
                <div className="relative w-full h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(sentimentPieData).map(
                          ([key, val]) => ({
                            name: key,
                            value: val.count,
                            fill: SENTIMENT_COLORS[key],
                          })
                        )}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {Object.entries(sentimentPieData).map(([key, val]) => (
                          <Cell
                            key={key}
                            fill={SENTIMENT_COLORS[key]}
                            style={{ cursor: "pointer" }}
                          />
                        ))}
                      </Pie>
                      <ChartTooltipContent />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Center text overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    {/* total count */}
                    <div className="text-2xl font-extrabold leading-tight text-foreground">
                      {pieChartCount}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Drug Mentions
                    </div>
                  </div>
                </div>
              </ChartContainer>

              {/* Short description and legend under the chart */}
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  Sentiment distribution shows the breakdown of conversation
                  sentiment across the dataset. The donut visual highlights the
                  relative proportion of Positive, Negative and Neutral
                  mentions. Use the legend below for exact counts and
                  percentages.
                </p>

                <div className="flex flex-col gap-2">
                  {Object.entries(sentimentPieData).map(([key, val]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{
                          background:
                            SENTIMENT_COLORS[
                              key as keyof typeof SENTIMENT_COLORS
                            ],
                        }}
                      />
                      <div className="flex-1 text-sm">
                        <div className="font-medium text-foreground">{key}</div>
                        <div className="text-muted-foreground text-xs">
                          {val.count.toLocaleString()} mentions •{" "}
                          {val.percentage}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-lg mb-2">
              {/* <TrendingUp className="h-5 w-5 text-primary" /> */}
              <h3 className="text-lg font-semibold ">
                Top Themes / Reasons / Trending Topics
              </h3>
            </div>

            <TopThemes />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
