import { howItWorksData } from "@/data/landing";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

const HowItWorks = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {howItWorksData.map((step, index) => (
            <Card
              key={index}
              className="bg-white p-6 shadow-none border border-gray-200 rounded-2xl flex items-start gap-6"
            >
              {/* Icon on left */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-800 flex-shrink-0">
                <div className="text-3xl">{step.icon}</div>
              </div>

              {/* Title & Description on right */}
              <div>
                <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {step.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
