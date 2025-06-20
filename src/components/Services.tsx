import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Automated Lifecycle Flows",
      problem: "New customers leak out of funnel.",
      deliverables: [
        "Welcome series",
        "Post-purchase sequences", 
        "Win-back campaigns",
        "Browse-abandon flows",
        "Cart-abandon recovery",
        "Sunset sequences"
      ]
    },
    {
      title: "Campaign Strategy & Copy", 
      problem: "Inbox fatigue; poor segmentation.",
      deliverables: [
        "Calendar planning",
        "Brand voice documentation",
        "4-week promo sequences",
        "A/B subject line testing",
        "Audience segmentation"
      ]
    },
    {
      title: "ESP Migration & Setup",
      problem: "Technical debt hinders scaling.",
      deliverables: [
        "Platform audit (Klaviyo, Mailchimp, Omnisend)",
        "List cleaning & validation",
        "Segment logic setup",
        "Integration configuration"
      ]
    },
    {
      title: "Deliverability Fixes",
      problem: "Emails land in spam.",
      deliverables: [
        "DNS setup (SPF/DKIM)",
        "Domain warm-up strategy",
        "Bounce management",
        "Ongoing monitoring",
        "Reputation management"
      ]
    },
    {
      title: "Reporting & Optimisation", 
      problem: "Low open/click/placed-order rates.",
      deliverables: [
        "Bi-weekly KPI dashboard",
        "Test roadmap development", 
        "Iterative copy refresh",
        "Performance analytics",
        "ROI tracking"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            Services That Actually Move the Needle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clear expectations, proven deliverables. Every service is designed to solve a specific revenue problem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-jet-black group-hover:text-brand-red transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-brand-red font-medium">
                  {service.problem}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <span className="text-brand-red mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Starting at <span className="font-semibold text-jet-black">$XXX</span> — final quote after audit.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;