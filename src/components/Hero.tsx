import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen bg-jet-black relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-red/20 via-brand-red/5 to-transparent"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold">
          HANSON <span className="text-brand-red">COPY</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-brand-red transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.instagram.com/liamhanson_06/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-red transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-brand-red transition-colors">
            <Linkedin size={20} />
          </a>
          <Button className="bg-white text-jet-black hover:bg-brand-red hover:text-white transition-all duration-300 px-6" asChild>
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
          <p className="text-brand-red text-sm font-medium mb-6 tracking-wide uppercase">
            High Roas.Zero Guesswork
          </p>
          
          {/* Main Headlines */}
          <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-6">
            Take Your Business to the Next Level
          </h1>
          
          <h2 className="font-display italic text-3xl md:text-4xl text-white mb-8">
            Scale Your Brand Through Paid Ads <span className="text-brand-red">The Right</span> Way
          </h2>
          
          {/* Value Proposition */}
          <p className="text-slate-subtle text-xl leading-relaxed mb-8 max-w-2xl">
            I help DTC brands scale fast using paid ads through Meta, Instagram and TikTok. From creative testing to full-funnel scaling, every campaign is optimized to maximize your ROAS and grow your revenue.
          </p>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Button size="lg" className="bg-white text-jet-black hover:bg-brand-red hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold" asChild>
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