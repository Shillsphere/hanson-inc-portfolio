const About = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
              Hi, I'm Liam Hanson—an 18-year-old Illinois-based copywriter & email-marketing specialist.
            </h2>
            
            <div className="text-brand-red text-lg font-semibold mb-6">
              Doubled email-driven revenue for multiple SMBs within 90 days.
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              My journey started with copywriting and grew through leadership experiences in door-to-door sales and a dog-walking hustle. After rebuilding my confidence following early trading losses, I discovered my true calling: strategic storytelling that drives results. Every setback taught me resilience, and every success reinforced my belief in the power of authentic communication.
            </p>
            
            <blockquote className="border-l-4 border-brand-red pl-6 mb-8">
              <p className="text-xl font-medium text-jet-black italic">
                "My mission is simple: craft strategic storytelling that turns inbox noise into predictable revenue."
              </p>
            </blockquote>
            
            <p className="text-gray-600">
              When I'm not split-testing subject lines, you'll find me weight-lifting or golfing.
            </p>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-red/5 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-gray-200 border-4 border-brand-red/20">
                  {/* Placeholder for actual photo */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-gray-600 text-lg font-medium">
                    Photo Coming Soon
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;