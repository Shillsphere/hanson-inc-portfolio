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
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Results That Speak
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real numbers from real campaigns across different industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="text-4xl font-bold text-brand-blue mb-2">
                {metric.value}
                {metric.trend && <span className="text-green-600 ml-2">{metric.trend}</span>}
              </div>
              {metric.label && (
                <div className="text-gray-600 font-medium mb-4">{metric.label}</div>
              )}
              <p className="text-gray-700 leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Metrics;