import { LineChart } from "@/components/LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Conversion() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Conversion Analytics</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {/* Graphs Section */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate Trend</CardTitle>
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
                <h4 className="font-semibold">Overall Rate</h4>
                <p className="text-muted-foreground">3.2% conversion rate across all channels</p>
              </div>
              <div>
                <h4 className="font-semibold">Top Converting Channel</h4>
                <p className="text-muted-foreground">Email marketing: 5.8% conversion rate</p>
              </div>
              <div>
                <h4 className="font-semibold">Improvement Areas</h4>
                <p className="text-muted-foreground">Mobile conversion rate needs optimization</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}