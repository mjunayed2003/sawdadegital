import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#1a1a1a] text-[#262626] dark:text-white font-sans overflow-x-hidden transition-colors duration-300">
        <Topbar />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <SelectedWork />
          <Leadership />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
