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
import Biologics from "./pages/Biologics";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { API_BASE } from "./config/api";
import { setSampleCounts } from "./store/sampleCountsSlice";
import { setDrugClassSplit } from "./store/drugClassSlice";
import { setCountryDrugClassMap } from "./store/countryDrugClassSlice";
import { setSourceSplit } from "./store/sourceSplitSlice";
import { setGeographySplit } from "./store/geographySlice";
import { setStakeholderSplit } from "./store/stakeholderSlice";
import { setPatientJourney } from "./store/patientJourneySlice";
import { setSentimentPieData } from "./store/sentimentPieSlice";
import BiologicsDrugStakeholder from "./pages/BiologicsDrugStakeholder";
import BiologicsAsthmaType from "./pages/BiologicsAsthmaType";

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/sample-mentions-count`);
        if (!res.ok) return;
        const body = await res.json();
        // backend may return array or object; prefer object
        const data = Array.isArray(body) ? body[0] || {} : body || {};
        dispatch(setSampleCounts(data));
      } catch (e) {
        // ignore errors for now
      }
    };
    fetchCounts();
    const fetchDrugClass = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/drug-class-split`);
        if (!res.ok) return;
        const body = await res.json();
        // body is expected to be an array of items
        dispatch(setDrugClassSplit(Array.isArray(body) ? body : []));
      } catch (e) {
        // ignore
      }
    };
    fetchDrugClass();
    const fetchCountryDrugClass = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/country-drug-class-map`);
        if (!res.ok) return;
        const body = await res.json();
        // backend may return mapping object or array; prefer mapping
        const data = Array.isArray(body) ? body[0] || {} : body || {};
        dispatch(setCountryDrugClassMap(data));
      } catch (e) {
        // ignore
      }
    };
    fetchCountryDrugClass();
    const fetchGeographySplit = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/geography-split`);
        if (!res.ok) return;
        const body = await res.json();
        // if backend returns array of documents, dispatch directly
        if (Array.isArray(body)) {
          dispatch(setGeographySplit(body as any));
        } else if (body && typeof body === "object") {
          // if backend returned a single document, wrap in array
          // if it's a mapping (keys -> arrays), merge into flat array
          const hasCountry = "country" in body;
          if (hasCountry) {
            dispatch(setGeographySplit([body] as any));
          } else {
            const merged = Object.values(body).flat();
            dispatch(setGeographySplit(merged as any));
          }
        }
      } catch (e) {
        // ignore
      }
    };
    fetchGeographySplit();
    const fetchStakeholderSplit = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/stakeholder-split`);
        if (!res.ok) return;
        const body = await res.json();
        if (Array.isArray(body)) {
          dispatch(setStakeholderSplit(body as any));
        } else if (body && typeof body === "object") {
          // single document -> if mapping of groups to arrays, merge; if single doc, wrap
          if (Array.isArray(Object.values(body)[0])) {
            const merged = Object.values(body).flat();
            dispatch(setStakeholderSplit(merged as any));
          } else if ("group" in body) {
            dispatch(setStakeholderSplit([body] as any));
          } else {
            // unknown shape: set empty
            dispatch(setStakeholderSplit([]));
          }
        }
      } catch (e) {
        // ignore for now
      }
    };
    fetchStakeholderSplit();
    const fetchSourceSplit = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/source-split`);
        if (!res.ok) return;
        const body = await res.json();
        // backend may return array or object; accept both
        const payload = Array.isArray(body) ? body : body || [];
        if (!Array.isArray(payload) && typeof payload === "object") {
          const merged = Object.values(payload).flat();
          dispatch(setSourceSplit(merged as any));
        } else {
          dispatch(setSourceSplit(payload as any));
        }
      } catch (e) {
        // ignore
      }
    };
    fetchSourceSplit();
    const fetchPatientJourney = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/patient-journey`);
        if (!res.ok) return;
        const body = await res.json();
        // backend may return array or single mapping/document
        if (Array.isArray(body)) {
          // if array of docs, map to expected PatientJourneyStage[] shape
          dispatch(setPatientJourney(body as any));
        } else if (body && typeof body === "object") {
          // if single mapping or single doc, try to normalize into array
          // if keys look like stages (e.g., 'Awareness'), and values are arrays or objects,
          // convert mapping into array items
          const values = Object.values(body);
          // if values are numeric objects, it might already be the array-like doc
          if (
            Array.isArray(values) &&
            values.length > 0 &&
            typeof values[0] === "object" &&
            "stage" in values[0]
          ) {
            dispatch(setPatientJourney(values as any));
          } else if ("stage" in body) {
            dispatch(setPatientJourney([body] as any));
          } else {
            // mapping of stage -> numeric object? convert into array
            const arr = Object.entries(body).map(([k, v]) => ({
              stage: k,
              ...(v as any),
            }));
            dispatch(setPatientJourney(arr as any));
          }
        }
      } catch (e) {
        // ignore
      }
    };
    fetchPatientJourney();
    const fetchSentimentPieData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/sentiment-pie-data`);
        if (!res.ok) return;
        const body = await res.json();
        if (body && typeof body === "object") {
          dispatch(setSentimentPieData(body));
        }
      } catch (e) {
        // ignore
      }
    };
    fetchSentimentPieData();
  }, [dispatch]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/patient-journey" element={<PatientJourney />} />
            <Route path="/drug-mentions" element={<LandingPage />} />
            <Route path="/drugstakeholder" element={<DrugStakeholder />} />
            <Route path="/asthematype" element={<AsthmaType />} />
            <Route path="/biologics" element={<Biologics />} />
            <Route
              path="/stakeholderattribute"
              element={<StakeholderAttribute />}
            />
            <Route
              path="/biodrugstakeholder"
              element={<BiologicsDrugStakeholder />}
            />
            <Route
              path="/bioasthematype"
              element={<BiologicsAsthmaType />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
