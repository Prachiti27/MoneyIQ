import Link from "next/link";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="bg-white py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Take Control of Your Finances Today
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-lg md:text-xl mb-12">
          Start tracking, planning, and optimizing your money with AI-powered insights. Simple, smart, and secure.
        </p>

        {/* CTA Button */}
        <Link href="/dashboard">
          <Button
            className="bg-black text-white px-12 py-5 text-xl font-semibold rounded-xl 
                       shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
