import { Link } from "react-router-dom";

const Industries = () => {
  const industries = [
    {
      title: "Online Coaching Businesses",
      image: `${import.meta.env.BASE_URL}online-coaching-business.jpg`,
      link: "/online-coaching-business"
    },
    {
      title: "E-commerce Clothing Brands", 
      image: `${import.meta.env.BASE_URL}clothing.png`,
      link: "/ecommerce-clothing-brands"
    },
    {
      title: "Hair Salons/Barbershops",
      image: `${import.meta.env.BASE_URL}hair-salons.jpg`,
      link: "/hair-salons-barbershops"
    },
    {
      title: "Online Coaches and Influencers",
      image: `${import.meta.env.BASE_URL}influencers.png`,
      link: "/online-coaches-influencers"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 font-alice">
            INDUSTRIES
          </h2>
          <p className="text-brand-gray text-xl font-semibold tracking-wide uppercase font-alice">
            WHO WE CHOOSE TO PARTNER WITH
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <Link 
              key={index}
              to={industry.link}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-video"
            >
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold font-alice">
                  {industry.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;