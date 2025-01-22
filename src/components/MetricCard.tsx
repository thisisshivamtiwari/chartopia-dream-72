import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
  route: string;
  trend: "up" | "down";
}

export function MetricCard({ title, value, description, className, route, trend }: MetricCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className={cn("metric-card cursor-pointer transition-all hover:scale-105", className)}
      onClick={() => navigate(route)}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {trend === "up" ? (
          <div className="flex items-center gap-1 text-[#F2FCE2]">
            <ArrowUpIcon className="h-4 w-4" />
          </div>
        ) : (
          <div className="flex items-center gap-1 text-[#ea384c]">
            <ArrowDownIcon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className={cn(
            "text-xs mt-1",
            trend === "up" ? "text-[#F2FCE2]" : "text-[#ea384c]"
          )}>
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}