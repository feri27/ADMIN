import QuickStackCard from "./QuickStackCard";
import {
  DatabaseIcon,
  CashIcon,
  ClockIcon,
  DocumentTextIcon,
  CalendarIcon,
  DocumentIcon
  
} from "@heroicons/react/outline";
import LineChart from "./LineChart";
import RecentActivity from "./RecentActivity";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import HBarChart from "./HBarChart";

function Dashboard() {
  const iconClass = "w-10 h-10 text-gray-400";
  return (
    <div className="flex flex-col space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
        <QuickStackCard title="Average time to complete" statics="22,222">
          <CalendarIcon className={iconClass} />
        </QuickStackCard>
      </div>
      <div className="flex flex-row px-1 py-4 items-center justify-between ">
        
        <button
          type="submit"
          className='float-right  text-cyan-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
          
        ><i className='fa fa-filter'></i> Filter</button>
        
        <h4 className="font-medium text-cyan-900 py-1">Chart</h4>
        
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
        <div className="lg:col-span-3 space-y-4">
          <HBarChart/>
        </div>
        {/* <div className="lg:col-span-2">
            <RecentActivity />
        </div> */}
      </div>
    </div>
  );
}

export default Dashboard;
