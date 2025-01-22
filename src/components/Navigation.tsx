import { useTheme } from "@/components/ThemeProvider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className="font-medium">
                Dashboard
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Metrics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <Link to="/metrics/revenue" className="block p-2 hover:bg-accent rounded-md">
                    Revenue Analytics
                  </Link>
                  <Link to="/metrics/users" className="block p-2 hover:bg-accent rounded-md">
                    User Statistics
                  </Link>
                  <Link to="/metrics/conversion" className="block p-2 hover:bg-accent rounded-md">
                    Conversion Rates
                  </Link>
                  <Link to="/metrics/orders" className="block p-2 hover:bg-accent rounded-md">
                    Order Analysis
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/settings" className="font-medium">
                Settings
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}