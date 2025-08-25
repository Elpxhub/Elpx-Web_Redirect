import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import DonationsMatter from "@/components/DonationsMatter";
import CurrentCampaigns from "@/components/CurrentCampaigns";
import ImpactSection from "@/components/ImpactSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import DonationForm from "@/components/DonationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <DonationsMatter />
      <CurrentCampaigns />
      <ImpactSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <DonationForm />
      <Footer />
    </div>
  );
};

export default Index;
