import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Index from "./pages/Index";
import PatientJourney from "./pages/PatientJourney";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import DrugStakeholder from "./pages/DrugStakeholder";
import AsthmaType from "./pages/AsthmaType";
import StakeholderAttribute from "./pages/StakeholderAttribute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/landing-page" element={<LandingPage/>} />
          <Route path="/drugstakeholder" element={<DrugStakeholder/>} />
          <Route path="/asthematype" element={<AsthmaType/>} />
          <Route path="/stakeholderattribute" element={<StakeholderAttribute/>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
