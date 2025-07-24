const Industries = () => {
  const industries = [
    "Online Coaching Businesses",
    "E-commerce Clothing Brands", 
    "Hair Salons/Barbershops",
    "Online Coaches and Influencers"
  ];

  return (
    <section className="py-24 bg-gray-50 relative">
      {/* Background overlay for future image */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Industries
          </h2>
          <p className="text-brand-blue text-xl font-semibold tracking-wide uppercase">
            WHO WE CHOOSE TO PARTNER WITH
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-blue/10"
            >
              <h3 className="text-text-dark text-lg font-semibold text-center leading-relaxed">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;