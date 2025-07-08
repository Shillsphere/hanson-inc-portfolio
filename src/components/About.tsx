const About = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Hi, I'm Liam Hanson - an 18 year old Illinois based Brand scaler and marketing specialist.
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I help DTC brands scale fast using paid ads through Meta, Instagram and TikTok. When I'm not deep in ads manager, I'm testing creatives with Figma or browsing ad trends.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Doubled revenues for clothing, wellness & lifestyle in under 90 days. When I'm not optimizing campaigns, you can find me on the court training kids in basketball fundamentals.
            </p>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-brand-blue/20">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;