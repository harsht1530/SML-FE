import { Button } from "@/components/ui/button";
import { BarChart3, Table } from "lucide-react";

interface ViewToggleProps {
  view: "table" | "chart";
  onViewChange: (view: "table" | "chart") => void;
}

const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex gap-2 bg-muted p-1 rounded-lg">
      <Button
        variant={view === "table" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("table")}
        className="gap-2"
      >
        <Table className="h-4 w-4" />
        Table
      </Button>
      <Button
        variant={view === "chart" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewChange("chart")}
        className="gap-2"
      >
        <BarChart3 className="h-4 w-4" />
        Chart
      </Button>
    </div>
  );
};

export default ViewToggle;
