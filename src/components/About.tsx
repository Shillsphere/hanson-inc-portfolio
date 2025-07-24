const About = () => {
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
              Welcome to Drivn Digital Marketing Agency
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Drivn Digital is a results-driven performance agency that thrives on shaping the digital landscape. We help E-commerce & Service Based Businesses Produce Game-Changing ROI Via Paid Advertising
            </p>
            
            <p className="text-brand-blue text-lg font-medium mb-6 italic">
              It's time to stop bleeding money and start printing profits
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Stop wasting time and money on faulty and ineffective ad campaigns and let us scale your brand the right way
            </p>
          </div>
          
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-brand-blue/20">
                  <img 
                    src="/lovable-uploads/105b206c-2a11-4d08-a42f-884d99fb308f.png" 
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