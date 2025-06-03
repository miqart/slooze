import RecentSales from './components/RecentSales';
import SalesChart from './components/SalesChart';
import Stats from './components/Stats';
import TotalCards from './components/TotalCards';

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto flex flex-col gap-y-6">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Dashboard</h4>
        </div>
        <TotalCards />
        <div className="grid grid-cols-5 gap-x-3">
          <SalesChart />
          <RecentSales />
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Dashboard;
