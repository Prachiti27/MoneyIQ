import { featuresData } from "@/data/landing";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Key Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-white p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Feature Icon */}
              <CardHeader className="flex justify-center mb-4">
                {feature.icon}
              </CardHeader>

              {/* Title & Description */}
              <CardContent>
                <CardTitle className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
