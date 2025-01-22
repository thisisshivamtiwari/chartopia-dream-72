import { LineChart } from "@/components/LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderValue() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Order Value Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Graphs Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Average Order Value Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>
        </div>

        {/* Insights Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Key Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Current AOV</h4>
                <p className="text-muted-foreground">$59.52 average order value</p>
              </div>
              <div>
                <h4 className="font-semibold">Top Categories</h4>
                <p className="text-muted-foreground">Electronics: $120 AOV</p>
              </div>
              <div>
                <h4 className="font-semibold">Growth Trend</h4>
                <p className="text-muted-foreground">8% increase in last 30 days</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}