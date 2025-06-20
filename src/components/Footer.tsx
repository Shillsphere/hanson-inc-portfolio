import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-jet-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h3>
          <p className="text-xl text-slate-subtle mb-8 max-w-2xl mx-auto">
            Let's talk about your goals and see how strategic email can grow your revenue.
          </p>
          <Button 
            size="lg"
            className="bg-brand-red text-white hover:bg-brand-red/90 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href="https://calendly.com/liamhanson755" target="_blank" rel="noopener noreferrer">
              Book Your Discovery Call →
            </a>
          </Button>
        </div>
        
        {/* Footer Content */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-white text-xl font-bold">
              Hanson <span className="text-brand-red">INC</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-slate-subtle hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.instagram.com/liamhanson_06/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-subtle hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-subtle hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-slate-subtle text-sm">
              © 2024 Hanson INC. All rights reserved. • Illinois-based Email Marketing Specialist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;