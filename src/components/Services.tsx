import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const Services = () => {
  const services = [{
    title: "Paid Social Strategy and Media Buying",
    problem: "Meta, Instagram, TikTok",
    deliverables: ["Meta Ads campaigns", "Instagram advertising", "TikTok Ads optimization", "Audience research & targeting", "Budget allocation strategy", "Creative testing framework"]
  }, {
    title: "PPC Campaigns on YouTube",
    problem: "Video advertising, retargeting",
    deliverables: ["YouTube advertising", "Video ad campaigns", "Retargeting campaigns", "YouTube Ads management"]
  }, {
    title: "Creative Testing + Ad Optimization",
    problem: "A/B ad visuals, headlines, landing pages",
    deliverables: ["A/B test ad visuals", "Headlines optimization", "Landing page testing", "Creative refresh cycles", "Performance analysis"]
  }, {
    title: "Launch Ad Campaigns",
    problem: "Deploy across platforms including YouTube",
    deliverables: ["Meta campaigns", "Instagram campaigns", "TikTok campaigns", "YouTube campaigns", "Ongoing A/B tests"]
  }];
  return <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-alice">
            Services that actually move the needle
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto font-alice">
            Clear expectations, proven deliverables. Every service is designed to solve a specific revenue problem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-black group-hover:text-brand-gray transition-colors font-alice">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-brand-gray font-medium font-alice">
                  {service.problem}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => <li key={i} className="flex items-start gap-2 text-brand-gray font-alice">
                      <span className="text-black mt-1">•</span>
                      {item}
                    </li>)}
                </ul>
                
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;