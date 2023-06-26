import QuickStackCard from "./QuickStackCard";
import {
  DatabaseIcon,
  CashIcon,
  ClockIcon,
  DocumentTextIcon,
  DocumentIcon
  
} from "@heroicons/react/outline";
import LineChart from "./LineChart";
import RecentActivity from "./RecentActivity";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function Dashboard() {
  const iconClass = "w-10 h-10 text-gray-400";
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickStackCard title="Total Permits" statics="22,222">
          <DocumentIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Outstanding Inspections" statics="22,222">
          <CashIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Number of expired" statics="22,222">
          <ClockIcon className={iconClass} />
        </QuickStackCard>
        <QuickStackCard title="Total Inspections" statics="22,222">
          <DatabaseIcon className={iconClass} />
        </QuickStackCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
       
        <div className="lg:col-span-3 space-y-4">
          <BarChart/>
        </div>
        <div className="lg:col-span-3 space-y-4">
          <PieChart/>
        </div>
        <div className="lg:col-span-3 space-y-4">
          <LineChart />
        </div>
        <div className="lg:col-span-2">
            <RecentActivity />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
