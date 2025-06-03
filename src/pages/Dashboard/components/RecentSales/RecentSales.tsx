import { UserCircleIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'src/components/ui/Card';

import { recentSalesData } from './data.ts';

const RecentSales = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 350 sales this month</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-4">
        {recentSalesData.map(({ name, email, value }) => (
          <div
            key={email}
            className="flex items-center gap-x-2 text-sm font-medium"
          >
            <UserCircleIcon className="h-10 w-10 text-gray-400" />
            <div className="mr-auto flex flex-col">
              <span>{name}</span>
              <span className="text-muted-foreground">{email}</span>
            </div>
            <span>{value}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentSales;
