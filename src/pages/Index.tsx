import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Industries />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
