import { featuresData } from "@/data/landing";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-white p-6 hover:scale-[1.02] transition-transform duration-300 shadow-sm"
            >
              <div className="flex items-start gap-4">
                {/* Feature Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 text-gray-800 flex-shrink-0">
                  <div className="text-3xl">{feature.icon}</div>
                </div>

                {/* Title & Description */}
                <CardContent className="p-0">
                  <CardTitle className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
