import { MetricCard } from "@/components/MetricCard";
import { LineChart } from "@/components/LineChart";
import { BarChart } from "@/components/BarChart";
import { PieChart } from "@/components/PieChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            value="$45,231.89"
            description="+20.1% from last month"
            route="/metrics/revenue"
            trend="up"
          />
          <MetricCard
            title="Active Users"
            value="2,350"
            description="+180 new users"
            route="/metrics/users"
            trend="up"
          />
          <MetricCard
            title="Conversion Rate"
            value="3.2%"
            description="-0.2% decrease"
            route="/metrics/conversion"
            trend="down"
          />
          <MetricCard
            title="Avg. Order Value"
            value="$59.52"
            description="+8% from last week"
            route="/metrics/order-value"
            trend="up"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <LineChart />
          <BarChart />
        </div>

        <div className="grid gap-6 md:grid-cols-2 pb-8">
          <PieChart />
          <div className="chart-container">
            <h3 className="text-lg font-semibold">Recent Activity</h3>
            <p className="text-muted-foreground mt-4">Coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;