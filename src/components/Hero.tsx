import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen bg-brand-light relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-blue/20 via-brand-blue/5 to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-text-dark text-xl font-bold">
          HANSON <span className="text-brand-blue">COPY</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="https://www.instagram.com/hansonscales/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-brand-blue transition-colors">
            <Instagram size={20} />
          </a>
          <Button className="bg-text-dark text-white hover:bg-brand-blue hover:text-white transition-all duration-300 px-6" asChild>
            <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl">
          {/* Micro-Hook */}
          <p className="text-brand-blue text-sm font-medium mb-6 tracking-wide uppercase">HIGH ROAS ZERO GUESSWORK</p>
          
          {/* Main Headlines */}
          <h1 className="text-text-dark text-6xl md:text-7xl font-bold leading-tight mb-6">
            Take Your Business to the Next Level
          </h1>
          
          <h2 className="font-display italic text-3xl md:text-4xl text-gray-700 mb-8">
            Scale Your Brand Through Paid Ads <span className="text-brand-blue">The Right</span> Way
          </h2>
          
          {/* Value Proposition */}
          
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Button size="lg" className="bg-text-dark text-white hover:bg-brand-blue hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold" asChild>
              <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
                Book a Discovery Call →
              </a>
            </Button>
            
            {/* Social Proof */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;