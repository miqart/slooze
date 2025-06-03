import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
} from 'recharts';
import { Card, CardContent } from 'src/components/ui/Card';
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/Chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/ui/Select';

import ChartCardHeader from '../ChartCardHeader';
import {
  compareChartConfig,
  subscriptionsLineChartConfig,
  totalEarningBarChartConfig,
  totalEarningBarChartData,
  weeklyCompareBarsData,
  weeklySingleLineData,
  yearlyCompareChartData,
} from './data.ts';

const StatsFilters = () => {
  return (
    <div className="mb-6 flex items-center gap-6">
      <h4 className="font-medium">Stats</h4>
      <Select defaultValue={'Years'}>
        <SelectTrigger aria-readonly className="w-24">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-card" side="top">
          {['Years'].map((el) => (
            <SelectItem key={el} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select defaultValue={'Aug 20th - Dec 4th'}>
        <SelectTrigger aria-readonly className="w-44">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-card" side="top">
          {['Aug 20th - Dec 4th'].map((el) => (
            <SelectItem key={el} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span>compared to</span>
      <Select defaultValue={'Previous'}>
        <SelectTrigger aria-readonly className="w-28">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-card" side="top">
          {['Previous'].map((el) => (
            <SelectItem key={el} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select defaultValue={'2025'}>
        <SelectTrigger aria-readonly className="w-24">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent className="bg-card" side="top">
          {['2025'].map((el) => (
            <SelectItem key={el} value={el}>
              {el}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const YearlyCompareLineDots = () => {
  return (
    <Card className="col-span-2">
      <ChartCardHeader title="Total Earning" />
      <CardContent>
        <ChartContainer className="max-h-64 w-full" config={compareChartConfig}>
          <LineChart
            accessibilityLayer
            data={yearlyCompareChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                r: 8,
              }}
              activeDot={{
                fill: 'var(--color-desktop)',
              }}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={{
                r: 8,
              }}
              activeDot={{
                fill: 'var(--color-mobile)',
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const TotalBarChart = () => {
  return (
    <Card>
      <ChartCardHeader title="Total Earning" />
      <CardContent>
        <ChartContainer config={totalEarningBarChartConfig}>
          <BarChart
            accessibilityLayer
            data={totalEarningBarChartData}
            margin={{
              top: 20,
            }}
          >
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
            <Bar dataKey="value" fill="hsl(var(--chart-2))" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const WeeklyCompareBars = () => {
  return (
    <Card className="col-span-2">
      <ChartCardHeader title="Total Earning" />
      <CardContent>
        <ChartContainer className="max-h-64 w-full" config={compareChartConfig}>
          <BarChart accessibilityLayer data={weeklyCompareBarsData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="desktop"
              stackId="a"
              fill="var(--color-desktop)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="mobile"
              stackId="a"
              fill="var(--color-mobile)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const SubscriptionsLineChart = () => {
  return (
    <Card>
      <ChartCardHeader title="Subscriptions" />
      <CardContent>
        <ChartContainer
          className="max-h-64 w-full"
          config={subscriptionsLineChartConfig}
        >
          <LineChart
            accessibilityLayer
            data={weeklySingleLineData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="weekDay"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="#FFA800"
              strokeWidth={2}
              dot={{
                fill: '#252626',
              }}
              activeDot={{
                fill: '#FFA800',
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const Stats = () => {
  return (
    <div>
      <StatsFilters />
      <div className="grid grid-cols-3 gap-x-3 gap-y-6">
        <YearlyCompareLineDots />
        <TotalBarChart />
        <WeeklyCompareBars />
        <SubscriptionsLineChart />
      </div>
    </div>
  );
};

export default Stats;
