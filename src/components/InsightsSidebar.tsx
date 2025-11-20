import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { keyInsights } from "@/data/mockData";

const InsightsSidebar = () => {
  return (
    <div className="space-y-4">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertCircle className="h-5 w-5 text-negative" />
            Pain Points
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {keyInsights.painPoints.map((point, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              • {point}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="h-5 w-5 text-primary" />
            Unmet Needs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {keyInsights.unmetNeeds.map((need, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              • {need}
            </p>
          ))}
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Lightbulb className="h-5 w-5 text-accent" />
            Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {keyInsights.opportunities.map((opportunity, index) => (
            <p key={index} className="text-sm text-muted-foreground">
              • {opportunity}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default InsightsSidebar;
