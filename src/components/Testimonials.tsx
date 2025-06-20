import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const placeholderTestimonials = [
    { company: "TechStart Solutions" },
    { company: "Fitness Empire" },
    { company: "Local Artisan Co." }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            What Clients Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses. Success stories are being written every day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {placeholderTestimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 blur-sm"></div>
                  <div>
                    <div className="w-24 h-4 bg-gray-300 rounded blur-sm mb-2"></div>
                    <div className="text-sm font-medium text-brand-red">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded blur-sm"></div>
                  <div className="h-4 bg-gray-200 rounded blur-sm"></div>
                  <div className="h-4 bg-gray-200 rounded blur-sm w-3/4"></div>
                </div>
                
                <p className="text-center text-gray-500 mt-6 italic">
                  "Your testimonial here — {testimonial.company}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            Client testimonials coming soon as projects complete...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;