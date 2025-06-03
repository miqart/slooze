import { ArrowTrendingUpIcon } from '@heroicons/react/16/solid';
import { ChartBarSquareIcon } from '@heroicons/react/24/outline';
import Button from 'src/components/ui/Button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from 'src/components/ui/Card';

import { totalCardsData } from './data.ts';

const TotalCards = () => {
  return (
    <div className="grid grid-cols-4 gap-x-3">
      {totalCardsData.map(({ title, value, trend }) => (
        <Card key={title}>
          <CardHeader className="pb-2">
            <div className="mb-2 flex items-center justify-between">
              <CardTitle>{title}</CardTitle>
              <Button variant="icon" className="h-5 w-5" size="icon">
                <ChartBarSquareIcon />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="mb-1 font-semibold">{value}</h4>
            <div className="flex items-center gap-x-2 text-sm">
              <span>trend title</span>
              <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />
              <span className="text-green-500">{trend}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TotalCards;
