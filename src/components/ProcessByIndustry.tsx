const ProcessByIndustry = () => {
  const processes = [
    {
      title: "Online Coaching Business",
      steps: [
        {
          number: "1",
          title: "Offer & Funnel Audit",
          description: "We review your current offer, funnel, and booking flow to identify where leads are dropping off or why conversions are low"
        },
        {
          number: "2", 
          title: "Funnel & Automation Setup",
          description: "We build or refine your entire funnel – from lead magnets and landing pages to email/SMS automations that nurture leads and book calls on autopilot"
        },
        {
          number: "3",
          title: "Paid Ads & Content Strategy",
          description: "We launch targeted Meta or Youtube ads using UGC-Style content and proven frameworks that attract ideal clients and drive conversions"
        },
        {
          number: "4",
          title: "Optimization & Scaling",
          description: "We track key metrics (like CPL, bookings, ROAS), test new creatives, and scale what's working so your calendar stays full and your revenue grows predictably"
        }
      ]
    },
    {
      title: "E-Commerce Clothing Brands",
      steps: [
        {
          number: "1",
          title: "Brand & Conversion Audit",
          description: "We analyze your store, product positioning, and ad strategy to find what's hurting your conversions or stopping you from scaling"
        },
        {
          number: "2", 
          title: "Funnel + Retention System Setup",
          description: "We create high-converting landing pages, cart upsells, and email/SMS flows that increase AOV and boost repeat purchases"
        },
        {
          number: "3",
          title: "UGC-Focused Paid Ad Campaigns",
          description: "We run full-funnel Meta/TikTok ads using relatable UGC content that grabs attention and drives purchases at every step – from awareness to checkout"
        },
        {
          number: "4",
          title: "Creative Testing & Scaling",
          description: "We constantly test ad angles, creatives, and audiences to lower your CPA, increase ROAS, and help you scale profitably month after month"
        }
      ]
    },
    {
      title: "Hair Salons / Barbershops",
      steps: [
        {
          number: "1",
          title: "Booking & Presence Audit",
          description: "We evaluate your online presence (Google, Instagram, booking system) to see what's holding back your appointments or visibility"
        },
        {
          number: "2", 
          title: "Local Funnel & Booking System Setup",
          description: "We build a simple booking funnel with automated SMS/email reminders and rebooking flows that reduce no-shows and fill your calendar"
        },
        {
          number: "3",
          title: "Local Meta Ads Strategy",
          description: "We run hyper-targeted Meta ads in your area with new client offers, loyalty incentives, or rebooking campaigns that drive foot traffic"
        },
        {
          number: "4",
          title: "Ongoing Client Retention & Growth",
          description: "We track booking, ad performance, and client return rates to improve retention and keep your chair filled consistently"
        }
      ]
    },
    {
      title: "Online Coaches & Influencers",
      steps: [
        {
          number: "1",
          title: "Brand & Monetization Audit",
          description: "We clarify your niche, audit your content, and uncover what's stopping you from turning followers into buyers"
        },
        {
          number: "2", 
          title: "Funnel & Digital Product Setup",
          description: "We help you launch or refine your monetization funnel (course, coaching, or digital product) and build automations that drive conversions"
        },
        {
          number: "3",
          title: "Content Strategy + Paid Ads",
          description: "We build your content pillars and run paid ads using UGC-style video to grow your audience, increase trust, and drive traffic to your offer"
        },
        {
          number: "4",
          title: "Scaling Optimization",
          description: "We monitor engagement, conversion rates, and sales – adjusting your strategy to grow consistently without burnout"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-alice">
            Our 4-Step Process to Grow Your Business
          </h2>
        </div>

        <div className="space-y-24">
          {processes.map((process, processIndex) => (
            <div key={processIndex} className="bg-gray-50 rounded-lg p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center font-alice">
                {process.title}
              </h3>
              
              {/* Desktop Grid */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-8">
                {process.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="text-center">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 mx-auto">
                      <span className="text-white text-xl font-bold font-alice">{step.number}</span>
                    </div>
                    <h4 className="text-xl font-bold text-black mb-4 font-alice">{step.title}</h4>
                    <p className="text-brand-gray leading-relaxed font-alice">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Mobile/Tablet Vertical */}
              <div className="lg:hidden space-y-8">
                {process.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold font-alice">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-xl font-bold text-black mb-3 font-alice">{step.title}</h4>
                      <p className="text-brand-gray leading-relaxed font-alice">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessByIndustry;