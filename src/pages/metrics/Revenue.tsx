import { LineChart } from "@/components/LineChart";

export default function Revenue() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Revenue Analytics</h1>
      <div className="grid gap-6">
        <div className="chart-container">
          <LineChart />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="metric-card">
            <h3 className="text-lg font-semibold">Monthly Growth</h3>
            <p className="text-3xl font-bold mt-2">+12.5%</p>
          </div>
          <div className="metric-card">
            <h3 className="text-lg font-semibold">Annual Projection</h3>
            <p className="text-3xl font-bold mt-2">$542,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}