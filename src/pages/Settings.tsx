import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="grid gap-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Theme</span>
              <div className="space-x-2">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Last login</span>
                <span className="text-muted-foreground">Today, 2:30 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Active sessions</span>
                <span className="text-muted-foreground">2 devices</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}