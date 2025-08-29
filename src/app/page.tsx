import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import Hero from "@/components/HomePage/Hero/Hero";
import HowItWorks from "@/components/HomePage/HowItWorks/HowItWorks";
import ValueProps from "@/components/HomePage/ValueProps/ValueProps";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <AboutUs />
      <FeaturedServices />
      <HowItWorks />
    </main>
  );
}
