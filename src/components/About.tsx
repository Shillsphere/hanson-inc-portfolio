const About = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Hi, I'm Liam Hanson — a 19-year-old, Illinois-based brand scaler and marketing specialist.
            </h2>
            
            <p className="text-brand-gray text-lg leading-relaxed mb-6 font-alice">
              I help DTC brands scale quickly using paid ads on Meta, Instagram, and TikTok. When I'm not deep in Ads Manager, I'm testing creatives in Figma or browsing ad-trend inspiration.
            </p>
            
            <p className="text-black text-lg font-medium mb-6 italic font-alice">
              It's time to stop bleeding money and start printing profits
            </p>
            
            <p className="text-brand-gray text-lg leading-relaxed mb-8 font-alice">
              Stop wasting time and money on faulty and ineffective ad campaigns and let us scale your brand the right way
            </p>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-gray-300">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/105b206c-2a11-4d08-a42f-884d99fb308f.png`} 
                    alt="Liam Hanson - Brand Scaler and Marketing Specialist"
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