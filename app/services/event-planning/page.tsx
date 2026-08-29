import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/event-planning/Hero";
import Capabilities from "@/components/event-planning/Capabilities";
import Process from "@/components/event-planning/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/event-planning/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function EventPlanningPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
        <Topbar />
        <Navbar />
        <main>
          <Hero />
          <Capabilities />
          <Process />
          <SelectedWork />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
