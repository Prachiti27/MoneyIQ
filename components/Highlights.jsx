import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { highlightsData } from "@/data/landing";

const Highlights = () => {
  return (
    <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Why Choose MoneyIQ?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlightsData.map((highlight, index) => (
              <Card
                key={index}
                className="border border-gray-200 rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl text-gray-900">
                    {highlight.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {highlight.label}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Highlights
