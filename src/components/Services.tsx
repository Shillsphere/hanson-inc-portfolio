import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Paid Social Strategy & Media Buying",
      problem: "Low ROAS; poor audience targeting.",
      deliverables: [
        "Meta Ads campaigns",
        "Instagram advertising", 
        "TikTok Ads optimization",
        "Audience research & targeting",
        "Budget allocation strategy",
        "Creative testing framework"
      ]
    },
    {
      title: "PPC Campaigns", 
      problem: "High cost per acquisition; low conversion.",
      deliverables: [
        "Google Ads management",
        "YouTube advertising",
        "Search campaigns",
        "Shopping ads optimization",
        "Retargeting campaigns"
      ]
    },
    {
      title: "Creative Testing & Ad Optimization",
      problem: "Ads fatigue; poor creative performance.",
      deliverables: [
        "A/B test ad visuals",
        "Headlines optimization",
        "Landing page testing",
        "Creative refresh cycles",
        "Performance analysis"
      ]
    },
    {
      title: "Full-Funnel Scaling Plans",
      problem: "Inconsistent scaling; poor funnel flow.",
      deliverables: [
        "Initial reach campaigns",
        "Retargeting sequences",
        "Automated upsells",
        "Customer journey mapping",
        "Conversion optimization"
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