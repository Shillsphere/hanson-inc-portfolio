import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Liam completely changed the game for us. We went from struggling with low ROAS to a consistent 3.5x return across Meta in just 6 weeks. His creative testing framework helped us finally crack cold traffic.",
      name: "Megan T.",
      role: "Co-Founder",
      company: "VYZE Clothing"
    },
    {
      quote: "We were burning money on Meta and TikTok before Liam stepped in. He built out a clean funnel, rewrote our ads, and cut our cost per sale in half. Revenue doubled within 2 months.",
      name: "Darren M.",
      role: "CMO",
      company: "Ritual Living Co."
    },
    {
      quote: "Working with Liam felt like having a true partner in our corner. He understood our brand voice immediately and translated that into ad creatives that actually resonated. We've never had this level of consistency or clarity in our marketing before.",
      name: "Rachel B.",
      role: "Founder",
      company: "District Nine Supply"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses. Success stories are being written every day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue/20 to-brand-blue/5 flex items-center justify-center">
                    <span className="text-brand-blue font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm font-medium text-brand-blue">@{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;