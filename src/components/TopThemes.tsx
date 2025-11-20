import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import React from "react";
import { patientJourney } from "@/data/mockData";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const SENTIMENT_COLORS = {
    Positive: "hsl(var(--positive))",
    Negative: "hsl(var(--negative))",
    Neutral: "hsl(var(--neutral))",
} as const;





const consolidatedJourney = [
    { stage: "Access", Positive: 12.0, Negative: 81.0, Neutral: 7.0 },

    { stage: "Adherence", Positive: 23.0, Negative: 54.0, Neutral: 23.0 },

    { stage: "Affordability", Positive: 23.0, Negative: 73.0, Neutral: 4.0 },

    // QoL group: QoL + Quality of Life + Effectiveness/Efficacy/QoL
    { stage: "Quality of Life (QoL)", Positive: 58.33, Negative: 7.0, Neutral: 34.67 },

    // Clinical guidelines + Clinical guidance + Clinical recommendation
    { stage: "Clinical Guidelines", Positive: 0, Negative: 0, Neutral: 100 },

    // Effectiveness group: Effectiveness + Efficacy
    { stage: "Effectiveness / Efficacy", Positive: 24.5, Negative: 70.5, Neutral: 5 },

    { stage: "Asthma Awareness", Positive: 46.0, Negative: 31.0, Neutral: 23.0 },
    { stage: "Asthma Control Assessment", Positive: 100.0, Negative: 0, Neutral: 0 },
    { stage: "Asthma Education", Positive: 24.0, Negative: 21.0, Neutral: 54.0 },
    { stage: "Asthma Management", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Biologics + Biologic perception + Biologics switching
    { stage: "Biologics", Positive: 15.67, Negative: 26.33, Neutral: 57.67 },

    // Biomarker
    { stage: "Biomarker usage", Positive: 33.0, Negative: 7.0, Neutral: 60.0 },

    // Confusion
    { stage: "Confusion", Positive: 0, Negative: 82.0, Neutral: 18.0 },

    // Cost + Cost-effectiveness
    { stage: "Cost", Positive: 57.0, Negative: 30.0, Neutral: 13.0 },

    // Delivery
    { stage: "Delivery Systems", Positive: 100.0, Negative: 0, Neutral: 0 },

    // Diagnosis
    { stage: "Diagnosis", Positive: 6.0, Negative: 67.0, Neutral: 27.0 },

    // Discontinuation
    { stage: "Discontinuation", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Dosage
    { stage: "Dosage", Positive: 14.0, Negative: 50.0, Neutral: 36.0 },

    // Drug interactions
    { stage: "Drug Interactions", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Emotion + Hope
    { stage: "Emotion", Positive: 63.5, Negative: 28.5, Neutral: 8 },

    // Perception + Generic drug perception
    { stage: "Perception", Positive: 8.0, Negative: 16.0, Neutral: 78.0 },

    // Home Admin
    { stage: "Home administration", Positive: 62.0, Negative: 33.0, Neutral: 4.0 },

    // Patient Satisfaction
    { stage: "Patient Satisfaction", Positive: 100.0, Negative: 0, Neutral: 0 },

    // Prescribing patterns
    { stage: "Prescribing Patterns", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Research
    { stage: "Research", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Safety
    { stage: "Safety", Positive: 12.0, Negative: 81.0, Neutral: 6.0 },

    // Specialist Referral
    { stage: "Specialist Referral", Positive: 32.0, Negative: 36.0, Neutral: 32.0 },

    // Symptoms
    { stage: "Symptoms", Positive: 16.0, Negative: 60.0, Neutral: 25.0 },

    // Technology Integration + Treatment Tracking
    { stage: "Technology Integration", Positive: 50.0, Negative: 0, Neutral: 50.0 },

    // Treatment Info (standalone)
    { stage: "Treatment Information", Positive: 0, Negative: 0, Neutral: 100.0 },

    // Not Detected
    { stage: "Not Detected", Positive: 1.0, Negative: 2.0, Neutral: 98.0 },
];
// Pick top 5 negative sentiment stages
const top5 = [...consolidatedJourney]
    .sort((a, b) => (b.Negative ?? 0) - (a.Negative ?? 0))
    .slice(0, 5)
    .reverse(); // <-- FLIP THE ORDER


const TopThemes = () => {
    return (
        <Card className="border">
            <CardHeader>
                {/* <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-primary" />
          Top Themes / Reasons / Trending Topics
        </CardTitle> */}
            </CardHeader>

            <CardContent className="space-y-4">
                {/* <p className="text-sm text-muted-foreground">
          The chart below shows the distribution of sentiment across the most prominent patient-journey stages. Bars are stacked to reflect Positive, Negative and Neutral shares.
        </p> */}

                {/* Stacked Bar Chart */}
                <div className="w-full flex items-center justify-center">
                    <div className="w-full max-w-3xl">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={top5}
                                layout="vertical"
                                barSize={32}
                                margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                            >
                                <XAxis type="number" hide />
                                <YAxis type="category" dataKey="stage" width={140} tick={{ fontSize: 12 }} />
                                <Tooltip />
                                <Legend />

                                <Bar dataKey="Negative" stackId="a" fill={SENTIMENT_COLORS.Negative} />
                                <Bar dataKey="Positive" stackId="a" fill={SENTIMENT_COLORS.Positive} />
                                <Bar dataKey="Neutral" stackId="a" fill={SENTIMENT_COLORS.Neutral} />
                            </BarChart>

                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TopThemes;
