import { ChartConfig } from 'src/components/ui/Chart';

export const salesChartData = [
  { month: 'January', value: 600 },
  { month: 'February', value: 200 },
  { month: 'March', value: 800 },
  { month: 'April', value: 400 },
  { month: 'May', value: 900 },
  { month: 'June', value: 300 },
  { month: 'July', value: 700 },
  { month: 'August', value: 400 },
  { month: 'September', value: 900 },
  { month: 'October', value: 400 },
  { month: 'November', value: 980 },
  { month: 'December', value: 380 },
];
export const salesChartConfig = {
  value: {
    label: 'Amount',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig;
