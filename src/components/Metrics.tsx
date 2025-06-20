const Metrics = () => {
  const metrics = [
    {
      value: "22%",
      trend: "↑",
      description: "Average placed-order rate increase across first 30 days of my flow rebuilds."
    },
    {
      value: "51%",
      label: "Open Rate", 
      description: "Median open rate on welcome sequences (3× industry avg)."
    },
    {
      value: "$4.85",
      label: "/ recipient",
      description: "Revenue per recipient on holiday promo, sporting goods niche."
    }
  ];

  return (
    <section className="py-24 bg-jet-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-slate-subtle max-w-2xl mx-auto">
            Real metrics from real campaigns. Numbers don't lie when strategy meets execution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="text-5xl md:text-6xl font-bold text-brand-red mb-2">
                {metric.value}
                {metric.trend && <span className="ml-2">{metric.trend}</span>}
                {metric.label && <span className="text-2xl text-white ml-1">{metric.label}</span>}
              </div>
              <p className="text-slate-subtle leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-sm text-slate-subtle">
            * Metrics verified in client ESP dashboards; full case studies coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;