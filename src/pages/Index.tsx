import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Portfolio from "@/components/Portfolio";
import Showreel from "@/components/Showreel";
import Equipment from "@/components/Equipment";
import Logos from "@/components/Logos";
import MultiStepContact from "@/components/MultiStepContact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground grain">
    <Navbar />
    <Hero />
    <Pillars />
    <Portfolio />
    <Showreel />
    <Equipment />
    <Logos />
    <MultiStepContact />
    <Footer />
  </div>
);

export default Index;
