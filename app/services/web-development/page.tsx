import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/web-development/Hero";
import Capabilities from "@/components/web-development/Capabilities";
import Process from "@/components/web-development/Process";
import SelectedWork from "@/components/SelectedWork";
import Pricing from "@/components/web-development/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function WebDevelopmentServicePage() {
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
