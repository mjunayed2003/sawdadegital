import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/marketing-sales/Hero";
import Capabilities from "@/components/marketing-sales/Capabilities";
import Process from "@/components/marketing-sales/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/marketing-sales/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function MarketingSalesPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#111111] font-sans overflow-x-hidden text-[#262626] dark:text-white transition-colors duration-300">
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
