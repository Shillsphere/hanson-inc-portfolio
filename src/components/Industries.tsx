const Industries = () => {
  const industries = [
    "Online Coaching Businesses",
    "E-commerce Clothing Brands", 
    "Hair Salons/Barbershops",
    "Online Coaches and Influencers"
  ];

  return (
    <section className="py-24 bg-gray-100 relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-alice">
            Industries
          </h2>
          <p className="text-brand-gray text-xl font-semibold tracking-wide uppercase font-alice">
            WHO WE CHOOSE TO PARTNER WITH
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <h3 className="text-black text-lg font-semibold text-center leading-relaxed font-alice">
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