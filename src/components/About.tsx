const About = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
              Hi, I'm Liam Hanson—an 18-year-old Illinois-based brand scaler and marketing specialist.
            </h2>
            
            <div className="text-brand-red text-lg font-semibold mb-6">
              Doubled revenues for clothing, wellness & lifestyle brands in under 90 days.
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              My journey started with copywriting and grew through leadership experiences in door-to-door sales and training kids for basketball. After rebuilding my confidence following early trading losses, I discovered my true calling: scaling brands through strategic paid advertising that drives results. Every setback taught me resilience, and every success reinforced my belief in the power of data-driven marketing.
            </p>
            
            <blockquote className="border-l-4 border-brand-red pl-6 mb-8">
              <p className="text-xl font-medium text-jet-black italic">
                "My mission is simple: help DTC brands scale fast using paid ads through Meta, Instagram and TikTok."
              </p>
            </blockquote>
            
            <p className="text-gray-600">When I'm not deep in ads manager, you'll find me testing creatives with Figma or browsing ad trends.</p>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-red/5 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-brand-red/20">
                  <img 
                    src="/lovable-uploads/b5f9d692-22b9-41da-afb3-5449348de925.png" 
                    alt="Liam Hanson" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;