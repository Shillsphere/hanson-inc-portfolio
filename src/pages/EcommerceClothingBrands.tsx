import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceClothingBrands = () => {
  const steps = [
    {
      number: "1",
      title: "Brand & Conversion Audit",
      description: "We analyze your store, product positioning, and ad strategy to find what's hurting your conversions or stopping you from scaling"
    },
    {
      number: "2", 
      title: "Funnel + Retention System Setup",
      description: "We create high-converting landing pages, cart upsells, and email/SMS flows that increase AOV and boost repeat purchases"
    },
    {
      number: "3",
      title: "UGC-Focused Paid Ad Campaigns",
      description: "We run full-funnel Meta/TikTok ads using relatable UGC content that grabs attention and drives purchases at every step – from awareness to checkout"
    },
    {
      number: "4",
      title: "Creative Testing & Scaling",
      description: "We constantly test ad angles, creatives, and audiences to lower your CPA, increase ROAS, and help you scale profitably month after month"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/drivn-digital-logo.svg" alt="Drivn Digital" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="https://www.instagram.com/drivndigital/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-gray transition-colors">
            <Instagram size={20} />
          </a>
          <Button className="bg-black text-white hover:bg-brand-gray transition-all duration-300 px-6" asChild>
            <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-brand-gray hover:text-black transition-colors mb-8 font-alice">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-alice">
            E-Commerce Clothing Brands
          </h1>
          
          <p className="text-xl text-brand-gray max-w-3xl font-alice">
            Scale your clothing brand profitably with our proven 4-step process designed specifically for e-commerce success.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-alice">
              Our 4-Step Process
            </h2>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, stepIndex) => (
              <div key={stepIndex} className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-xl font-bold font-alice">{step.number}</span>
                </div>
                <h4 className="text-xl font-bold text-black mb-4 font-alice">{step.title}</h4>
                <p className="text-brand-gray leading-relaxed font-alice">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Vertical */}
          <div className="lg:hidden space-y-8 mb-16">
            {steps.map((step, stepIndex) => (
              <div key={stepIndex} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold font-alice">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="text-xl font-bold text-black mb-3 font-alice">{step.title}</h4>
                  <p className="text-brand-gray leading-relaxed font-alice">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-black text-white hover:bg-brand-gray transition-all duration-300 px-8 py-4 text-lg font-semibold font-alice" asChild>
              <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
                Get Started Today →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceClothingBrands;