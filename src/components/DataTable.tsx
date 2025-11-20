import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SentimentData } from "@/data/mockData";

interface DataTableProps {
  data: any[];
  columns: string[];
  sentimentColumns?: boolean;
  onRowClick?: (row: any) => void;
}

const DataTable = ({ data, columns, sentimentColumns = false, onRowClick }: DataTableProps) => {
  const renderCell = (item: any, column: string) => {
    // If the column explicitly is `sentiment` and sentimentColumns is true,
    // render the sentiment badges using the item's `sentiment` object.
    if (column === "sentiment" && sentimentColumns) {
      const sentiment = item.sentiment as SentimentData;
      return (
        // Inline-flex + nowrap keeps the three badges on a single line
        <div className="inline-flex items-center gap-3 whitespace-nowrap min-w-[220px]">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-positive/20 text-positive">
            Positive: {sentiment.Positive.toLocaleString()}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-negative/20 text-negative">
            Negative: {sentiment.Negative.toLocaleString()}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral/20 text-neutral">
            Neutral: {sentiment.Neutral.toLocaleString()}
          </span>
        </div>
      );
    }

    // If the column value itself is an object with Positive/Negative/Neutral keys
    // (used for per-stakeholder columns where we store strings like "18.5% (123)"),
    // render badges the same way but using the provided strings.
    const colVal = item[column];
    if (colVal && typeof colVal === "object" && (colVal.Positive !== undefined || colVal.Negative !== undefined || colVal.Neutral !== undefined)) {
      const pos = colVal.Positive ?? "";
      const neg = colVal.Negative ?? "";
      const neu = colVal.Neutral ?? "";
      return (
        // Ensure stakeholder columns keep badges on one line and have a min width
        <div className="inline-flex items-center gap-3 whitespace-nowrap min-w-[180px]">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-positive/20 text-positive">{pos}</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-negative/20 text-negative">{neg}</span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral/20 text-neutral">{neu}</span>
        </div>
      );
    }
    
    if (column === "Positive" || column === "Negative" || column === "Neutral") {
  const colorClass =
    column === "Positive"
      ? "text-positive"
      : column === "Negative"
      ? "text-negative"
      : "text-neutral";

  const value = item[column];

  // ✅ Only append "%" if it's a numeric value (e.g. 45 or "45")
  const displayValue =
    typeof value === "number" || (!isNaN(value) && value !== "" && value !== null)
      ? `${value}%`
      : value;

  return <span className={`font-semibold ${colorClass}`}>{displayValue}</span>;
}

    
    // removed themes column rendering
    
    return item[column]?.toLocaleString() || item[column];
  };

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            {columns.map((column) => (
              <TableHead key={column} className="font-semibold px-4 py-3 text-left border-r last:border-r-0">
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              className={onRowClick ? "hover:bg-accent/40 cursor-pointer transition-colors" : "hover:bg-muted/30 transition-colors"}
              onClick={onRowClick ? () => onRowClick(item) : undefined}
            >
              {columns.map((column) => (
                <TableCell key={column} className="px-4 py-3 border-r last:border-r-0 align-top">
                  {renderCell(item, column)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
