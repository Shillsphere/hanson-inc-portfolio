const Metrics = () => {
  const metrics = [{
    value: "22%",
    trend: "↑",
    description: "Average placed-order rate increase across first 30 days of my flow rebuilds."
  }, {
    value: "51%",
    label: "Open Rate",
    description: "Median open rate on welcome sequences (3× industry avg)."
  }, {
    value: "$4.85",
    label: "/ recipient",
    description: "Revenue per recipient on holiday promo, sporting goods niche."
  }];
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real performance metrics from recent campaigns across different verticals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-8 bg-card rounded-lg border">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}
                {metric.trend && <span className="text-primary ml-2">{metric.trend}</span>}
              </div>
              {metric.label && (
                <div className="text-lg font-semibold text-foreground mb-3">
                  {metric.label}
                </div>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Metrics;