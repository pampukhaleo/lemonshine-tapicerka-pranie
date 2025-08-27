
import { Helmet } from 'react-helmet-async';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Helmet>
        <title>LemonShine - Profesjonalne Pranie Tapicerki we Wrocławiu</title>
        <meta name="description" content="Profesjonalne pranie tapicerki meblowej we Wrocławiu. Usuwamy plamy, odświeżamy kolory. Najlepsze efekty prania kanap, foteli i dywanów." />
        <link rel="canonical" href="https://lemonshine.pl" />
      </Helmet>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
