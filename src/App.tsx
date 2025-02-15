import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import Index from "./pages/Index";
import Revenue from "./pages/metrics/Revenue";
import Settings from "./pages/Settings";
import Users from "./pages/metrics/Users";
import Conversion from "./pages/metrics/Conversion";
import OrderValue from "./pages/metrics/OrderValue";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Navigation />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/metrics/revenue" element={<Revenue />} />
              <Route path="/metrics/users" element={<Users />} />
              <Route path="/metrics/conversion" element={<Conversion />} />
              <Route path="/metrics/order-value" element={<OrderValue />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;