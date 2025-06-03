import { ChartConfig } from 'src/components/ui/Chart';

export const yearlyCompareChartData = [
  { month: 'January', desktop: 150, mobile: 450 },
  { month: 'February', desktop: 70, mobile: 420 },
  { month: 'March', desktop: 40, mobile: 350 },
  { month: 'April', desktop: 400, mobile: 280 },
  { month: 'May', desktop: 900, mobile: 270 },
  { month: 'June', desktop: 300, mobile: 260 },
  { month: 'July', desktop: 340, mobile: 240 },
  { month: 'August', desktop: 400, mobile: 220 },
  { month: 'September', desktop: 450, mobile: 230 },
  { month: 'October', desktop: 400, mobile: 240 },
  { month: 'November', desktop: 340, mobile: 260 },
  { month: 'December', desktop: 380, mobile: 280 },
];

export const compareChartConfig = {
  desktop: {
    label: 'Current',
    color: '#12B76A',
  },
  mobile: {
    label: 'Previous',
    color: '#AAE5C9',
  },
} satisfies ChartConfig;

export const totalEarningBarChartData = [
  { month: 'January', value: 186 },
  { month: 'February', value: 305 },
  { month: 'March', value: 237 },
  { month: 'April', value: 73 },
  { month: 'May', value: 209 },
  { month: 'June', value: 214 },
];

export const weeklySingleLineData = [
  { weekDay: 'Mo', value: 186 },
  { weekDay: 'Tu', value: 305 },
  { weekDay: 'We', value: 237 },
  { weekDay: 'Th', value: 73 },
  { weekDay: 'Fr', value: 209 },
  { weekDay: 'Sa', value: 214 },
  { weekDay: 'Su', value: 214 },
];

export const subscriptionsLineChartConfig = {
  value: {
    label: 'Amount',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export const totalEarningBarChartConfig = {
  value: {
    label: 'Amount',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;

export const weeklyCompareBarsData = [
  { month: 'Mo', desktop: 186, mobile: 80 },
  { month: 'Tu', desktop: 305, mobile: 200 },
  { month: 'We', desktop: 237, mobile: 120 },
  { month: 'Th', desktop: 73, mobile: 190 },
  { month: 'Fr', desktop: 209, mobile: 130 },
  { month: 'Sa', desktop: 214, mobile: 140 },
  { month: 'Su', desktop: 260, mobile: 170 },
];
