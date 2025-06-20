import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-jet-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-white rounded-full"></div>
        <div className="absolute bottom-60 right-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute bottom-80 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-white text-2xl font-bold">
          ⚡ Hanson <span className="text-brand-red">INC</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-slate-subtle hover:text-white transition-colors text-sm">
            How It Works
          </a>
          <a href="#" className="text-slate-subtle hover:text-white transition-colors text-sm">
            About
          </a>
          <a href="#" className="text-slate-subtle hover:text-white transition-colors text-sm">
            Process
          </a>
          <a href="#" className="text-slate-subtle hover:text-white transition-colors text-sm">
            Results
          </a>
          <Button className="bg-white text-jet-black hover:bg-slate-subtle transition-all duration-300 px-6 py-2 rounded-full text-sm font-medium" asChild>
            <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
              Book Your Free Intro Call
            </a>
          </Button>
        </div>
      </nav>

      {/* Scarcity Element */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">
        <div className="inline-block bg-slate-subtle/10 text-slate-subtle px-4 py-2 rounded-full text-sm font-medium">
          Only 3 Spots Left For February
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-32">
        <div className="max-w-5xl">
          {/* Main Headlines */}
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 tracking-tight">
            Modern Email Marketing
            <br />
            <span className="text-slate-subtle">For Startups</span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-slate-subtle text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
            Hanson INC replaces unreliable freelancers and expensive agencies for one flat monthly fee.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start gap-6 mb-16">
            <Button size="lg" className="bg-white text-jet-black hover:bg-slate-subtle transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-full" asChild>
              <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
                Book Your Free Intro Call
              </a>
            </Button>
            
            <Button variant="ghost" className="text-white hover:text-slate-subtle transition-colors text-lg font-medium" asChild>
              <a href="#services">
                See Our Services ▶
              </a>
            </Button>
          </div>
        </div>

        {/* Social Proof Logos */}
        <div className="flex items-center justify-start gap-12 opacity-30 mt-20">
          <div className="text-white text-2xl font-bold">Klaviyo</div>
          <div className="text-white text-2xl font-bold">Mailchimp</div>
          <div className="text-white text-2xl font-bold">ConvertKit</div>
          <div className="text-white text-2xl font-bold">ActiveCampaign</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;