const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Audit and Deep Dive",
      descriptor: "Complete account analysis",
      deliverables: "Ad account audit, product & offer review, current funnel analysis."
    },
    {
      number: "2", 
      title: "Custom Paid Ads Strategy",
      descriptor: "Tailored scaling roadmap",
      deliverables: "Targeting strategy, budget scaling plan, creative roadmap."
    },
    {
      number: "3",
      title: "Launch Ad Campaigns", 
      descriptor: "Deploy across platforms",
      deliverables: "Meta, Instagram, TikTok campaigns with ongoing A/B tests."
    },
    {
      number: "4",
      title: "Scale and Iterate",
      descriptor: "Optimize top performers", 
      deliverables: "Scale winning ads, optimize budgets, lower cost performers."
    },
    {
      number: "5",
      title: "Transparent Reporting",
      descriptor: "Data-driven insights",
      deliverables: "Weekly dashboards, actionable insights, performance breakdowns."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-jet-black mb-6">
            How We Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A proven 5-step process that takes you from strategy to results in weeks, not months.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gray-200"></div>
            <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-brand-red via-brand-red to-gray-200"></div>
            
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Number Circle */}
                  <div className="relative mx-auto w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mb-6">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-jet-black mb-2">{step.title}</h3>
                  <p className="text-brand-red font-medium mb-3">{step.descriptor}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.deliverables}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mx-auto mt-4"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-bold text-jet-black mb-2">{step.title}</h3>
                  <p className="text-brand-red font-medium mb-3">{step.descriptor}</p>
                  <p className="text-gray-600 leading-relaxed">{step.deliverables}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;