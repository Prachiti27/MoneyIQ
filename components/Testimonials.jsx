import Image from "next/image";
import { testimonialsData } from "@/data/landing";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-none"
            >
              <CardHeader className="flex flex-col items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover mb-3"
                />
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </CardTitle>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {testimonial.quote}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
