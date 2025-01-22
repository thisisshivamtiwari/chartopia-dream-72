import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
  route: string;
}

export function MetricCard({ title, value, description, className, route }: MetricCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className={cn("metric-card cursor-pointer transition-all hover:scale-105", className)}
      onClick={() => navigate(route)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}