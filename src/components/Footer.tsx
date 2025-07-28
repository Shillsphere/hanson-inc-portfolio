import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-alice">
            Ready to Scale Your Brand with Paid Ads?
          </h3>
          <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto font-alice">
            Let's talk about your goals and see how strategic paid advertising can grow your revenue.
          </p>
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-brand-gray hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold font-alice"
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
            <div className="flex items-center">
              <img src="/drivn-digital-logo.svg" alt="Drivn Digital" className="h-8 w-auto invert" />
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.instagram.com/drivndigital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-gray hover:text-white transition-colors"
                aria-label="DRIVN DIGITAL Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-brand-gray text-sm font-alice">
              © 2024 DRIVN DIGITAL. All rights reserved. • Digital Marketing Agency
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;