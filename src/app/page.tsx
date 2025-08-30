import Hero from "@/components/HomePage/Hero/Hero";
// import ValueProps from "@/components/HomePage/ValueProps/ValueProps";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import Specialize from "@/components/HomePage/Specialize/Specialize";
import Memberships from "@/components/HomePage/Memberships/Memberships";
import Testimonials from "@/components/shared/Testimonials/Testimonials";
import RecentWorks from "@/components/HomePage/RecentWorks/RecentWorks";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import Solutions from "@/components/HomePage/Solutions/Solutions";

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* <ValueProps /> */}
      <AboutUs />
      <FeaturedServices />
      <FinalCTA />
      <Solutions />
      <Specialize />
      <Memberships />
      <Testimonials />
      <RecentWorks />
      <Footer />
    </main>
  );
}
