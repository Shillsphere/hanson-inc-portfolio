import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Hero = () => {
  return <section className="min-h-screen animated-gradient relative overflow-hidden">
      {/* readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/20 to-transparent pointer-events-none" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/drivn-digital-logo.svg" alt="Drivn Digital" className="h-12 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="https://www.instagram.com/drivndigital/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
            <Instagram size={20} />
          </a>
          <Button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-6" asChild>
            <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
              Book a Call
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl">
          {/* Main Headlines */}
          <h1 className="text-white text-6xl md:text-7xl font-alice font-bold leading-tight mb-6 drop-shadow-xl">
            Elevating<br />
            Brands With<br />
            Cutting-Edge<br />
            Strategies
          </h1>
          
          <h2 className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8 font-alice drop-shadow">
            Providing 'business-changing' digital marketing that actually drives profitable growth and not just metrics
          </h2>
          
          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-8 py-4 text-lg font-semibold font-alice" asChild>
              <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
                Let's get going →
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;