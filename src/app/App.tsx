import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ExhibitionsPage } from "./pages/ExhibitionsPage";
import { FreightCarsPage } from "./pages/FreightCarsPage";
import { CaboosesPage } from "./pages/CaboosesPage";
import { PullmanSleeperPage } from "./pages/PullmanSleeperPage";
import { BaggageCarPage } from "./pages/BaggageCarPage";
import { SupportPage } from "./pages/SupportPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/exhibitions" element={<ExhibitionsPage />} />
            <Route path="/exhibitions/baggage-car" element={<BaggageCarPage />} />
            <Route path="/exhibitions/freight-cars" element={<FreightCarsPage />} />
            <Route path="/exhibitions/cabooses" element={<CaboosesPage />} />
            <Route path="/exhibitions/pullman-sleeper" element={<PullmanSleeperPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}