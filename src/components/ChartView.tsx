import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartViewProps {
  data: any[];
  type?: "bar" | "pie";
  dataKeys?: string[];
}

const SENTIMENT_COLORS = {
  Positive: "hsl(var(--positive))",
  Negative: "hsl(var(--negative))",
  Neutral: "hsl(var(--neutral))",
};


// Helper to extract the count from "X% (count)" or just return the number
function parseCount(val: any): number {
  if (typeof val === 'number') return val;
  if (!val) return 0;
  // If val is an object with a count property (for sentimentPieData)
  if (typeof val === 'object' && val.count !== undefined) return val.count;
  if (typeof val === 'string') {
    const match = val.match(/\((\d+)\)/);
    if (match) return parseInt(match[1], 10);
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
  }
  return 0;
}

const ChartView = ({ data, type = "bar", dataKeys = ["Positive", "Negative", "Neutral"] }: ChartViewProps) => {
  if (type === "pie") {
    const pieData = data.flatMap((item) => [
      { name: `${item.type || item.country || item.group || item.stage} - Positive`, value: parseCount(item.sentiment?.Positive ?? item.Positive), fill: SENTIMENT_COLORS.Positive },
      { name: `${item.type || item.country || item.group || item.stage} - Negative`, value: parseCount(item.sentiment?.Negative ?? item.Negative), fill: SENTIMENT_COLORS.Negative },
      { name: `${item.type || item.country || item.group || item.stage} - Neutral`, value: parseCount(item.sentiment?.Neutral ?? item.Neutral), fill: SENTIMENT_COLORS.Neutral },
    ]);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  const barData = data.map((item) => ({
    name: item.type || item.country || item.group || item.stage,
    Positive: parseCount(item.sentiment?.Positive ?? item.Positive),
    Negative: parseCount(item.sentiment?.Negative ?? item.Negative),
    Neutral: parseCount(item.sentiment?.Neutral ?? item.Neutral),
  }));

  // Ensure the container is tall enough so each horizontal bar (category) and its label
  // are visible even when there are many categories. 60px per item is a reasonable baseline.
  const containerHeight = Math.max(200, barData.length * 60);

  return (
    <ResponsiveContainer width="100%" height={containerHeight}>
      {/*
        Horizontal stacked bars: set layout="vertical" so bars run left-to-right.
        XAxis becomes numeric (values), YAxis is categorical (names).
      */}
      <BarChart data={barData} layout="vertical" margin={{ top: 20, right: 24, left: 140, bottom: 20 }} barCategoryGap="20%">
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis
          type="number"
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--foreground))" }}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={140}
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: "hsl(var(--foreground))", width: 140 }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "hsl(var(--card))", 
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px"
          }}
        />
        <Legend />
  {/* Stacked bars: use the same stackId so values stack on top of each other */}
        <Bar dataKey="Positive" stackId="a" fill={SENTIMENT_COLORS.Positive} />
        <Bar dataKey="Negative" stackId="a" fill={SENTIMENT_COLORS.Negative} />
        <Bar dataKey="Neutral" stackId="a" fill={SENTIMENT_COLORS.Neutral} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartView;
