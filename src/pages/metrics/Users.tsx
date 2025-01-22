import { LineChart } from "@/components/LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Users() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Graphs Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>User Growth Trend</CardTitle>
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
                <h4 className="font-semibold">Growth Rate</h4>
                <p className="text-muted-foreground">User base growing at 15% month over month</p>
              </div>
              <div>
                <h4 className="font-semibold">User Engagement</h4>
                <p className="text-muted-foreground">75% of users are active daily</p>
              </div>
              <div>
                <h4 className="font-semibold">Retention Rate</h4>
                <p className="text-muted-foreground">90% monthly retention rate</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Demographics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Age Distribution:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>18-24: 30%</li>
                  <li>25-34: 45%</li>
                  <li>35-44: 15%</li>
                  <li>45+: 10%</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}