import { ArrowTrendingUpIcon } from '@heroicons/react/16/solid';
import { CardHeader, CardTitle } from 'src/components/ui/Card';

interface IProps {
  title: string;
}

const ChartCardHeader = ({ title }: IProps) => {
  return (
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <h4 className="mb-1 font-semibold">$ 112,893.00</h4>
      <div className="flex items-center gap-x-2 text-sm">
        <span>trend title</span>
        <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
        <span className="text-green-500">70.5%</span>
      </div>
    </CardHeader>
  );
};

export default ChartCardHeader;
