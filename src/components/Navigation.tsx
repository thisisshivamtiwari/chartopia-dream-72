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
import { Menu, Moon, Sun, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = (
    <>
      <Link to="/" className="block p-2 hover:bg-accent rounded-md">
        Dashboard
      </Link>
      <Link to="/metrics/revenue" className="block p-2 hover:bg-accent rounded-md">
        Revenue Analytics
      </Link>
      <Link to="/metrics/users" className="block p-2 hover:bg-accent rounded-md">
        User Statistics
      </Link>
      <Link to="/metrics/conversion" className="block p-2 hover:bg-accent rounded-md">
        Conversion Rates
      </Link>
      <Link to="/metrics/order-value" className="block p-2 hover:bg-accent rounded-md">
        Order Analysis
      </Link>
      <Link to="/settings" className="block p-2 hover:bg-accent rounded-md">
        Settings
      </Link>
    </>
  );

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[96vh]">
              <DrawerHeader>
                <DrawerTitle>Navigation</DrawerTitle>
              </DrawerHeader>
              <div className="px-4 py-2 flex flex-col space-y-2">
                {navigationLinks}
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="ml-auto"
                  >
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
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
                    {navigationLinks}
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
        </div>

        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hidden md:inline-flex"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Link to="/settings" className="hidden md:inline-flex">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}