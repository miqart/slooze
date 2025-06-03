import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from 'src/components/ui/Card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/Chart';

import { salesChartConfig, salesChartData } from './data.ts';

const SalesChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="max-h-96 w-full" config={salesChartConfig}>
          <BarChart
            accessibilityLayer
            data={salesChartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <YAxis
              type="number"
              tickFormatter={(value: number) => `$${value.toLocaleString()}`}
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
