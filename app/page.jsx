import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="mt-40">
      <Hero />
      <Highlights/>
      <Features/>
      <HowItWorks/>
      <Testimonials/>
      <CTA/>
    </div>
  );
}
