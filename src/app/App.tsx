import { HashRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ExhibitionsPage } from "./pages/ExhibitionsPage";
import { CaboosesPage } from "./pages/Ruffin";
import { PullmanSleeperPage } from "./pages/NewGeorgiaCar";
import { BaggageCarPage } from "./pages/BaggageCarPage";
import { ExhibitionTemplatePage } from "./pages/ExhibitionTemplatePage";
import { ExhibitionTemplateGalleryPage } from "./pages/ExhibitionTemplateGalleryPage";
import { ROUTES } from "./routes";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.exhibitions} element={<ExhibitionsPage />} />
            <Route path={ROUTES.baggageCar} element={<BaggageCarPage />} />
            <Route path={ROUTES.ruffin} element={<CaboosesPage />} />
            <Route path={ROUTES.newGeorgia} element={<PullmanSleeperPage />} />
            <Route path={ROUTES.exhibitionTemplate} element={<ExhibitionTemplatePage />} />
            <Route path={ROUTES.exhibitionTemplateGallery} element={<ExhibitionTemplateGalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}