import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnlineCoachingBusiness from "./pages/OnlineCoachingBusiness";
import EcommerceClothingBrands from "./pages/EcommerceClothingBrands";
import HairSalonsBarbershops from "./pages/HairSalonsBarbershops";
import OnlineCoachesInfluencers from "./pages/OnlineCoachesInfluencers";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/online-coaching-business" element={<OnlineCoachingBusiness />} />
          <Route path="/ecommerce-clothing-brands" element={<EcommerceClothingBrands />} />
          <Route path="/hair-salons-barbershops" element={<HairSalonsBarbershops />} />
          <Route path="/online-coaches-influencers" element={<OnlineCoachesInfluencers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
