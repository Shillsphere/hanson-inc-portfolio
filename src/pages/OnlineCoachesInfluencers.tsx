import { Button } from "@/components/ui/button";
import { ArrowLeft, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineCoachesInfluencers = () => {
  const steps = [
    {
      number: "1",
      title: "Brand & Monetization Audit",
      description: "We clarify your niche, audit your content, and uncover what's stopping you from turning followers into buyers"
    },
    {
      number: "2", 
      title: "Funnel & Digital Product Setup",
      description: "We help you launch or refine your monetization funnel (course, coaching, or digital product) and build automations that drive conversions"
    },
    {
      number: "3",
      title: "Content Strategy + Paid Ads",
      description: "We build your content pillars and run paid ads using UGC-style video to grow your audience, increase trust, and drive traffic to your offer"
    },
    {
      number: "4",
      title: "Scaling Optimization",
      description: "We monitor engagement, conversion rates, and sales – adjusting your strategy to grow consistently without burnout"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}drivn-digital-logo.svg`} alt="Drivn Digital" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="https://www.instagram.com/drivndigital_agency/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-brand-gray transition-colors">
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
            Online Coaches & Influencers
          </h1>
          
          <p className="text-xl text-brand-gray max-w-3xl font-alice">
            Transform your influence into income with our proven monetization strategy for coaches and influencers.
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

export default OnlineCoachesInfluencers;