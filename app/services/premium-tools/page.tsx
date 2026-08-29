import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/premium-tools/Hero";
import Capabilities from "@/components/premium-tools/Capabilities";
import Process from "@/components/premium-tools/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/premium-tools/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function PremiumToolsPage() {
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
