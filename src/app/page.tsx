import Hero from "@/components/HomePage/Hero/Hero";
import ValueProps from "@/components/HomePage/ValueProps/ValueProps";
import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import FeaturedServices from "@/components/HomePage/FeaturedServices/FeaturedServices";
import Specialize from "@/components/HomePage/Specialize/Specialize";
import Memberships from "@/components/HomePage/Memberships/Memberships";
import Testimonials from "@/components/shared/Testimonials/Testimonials";
// import Consultation from "@/components/HomePage/Consultation/Consultation";
// import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
// import Footer from "@/components/shared/Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ValueProps />
      <AboutUs />
      <FeaturedServices />
      <Specialize />
      <Memberships />
      <Testimonials />
      {/* <Consultation /> */}
      {/* <FinalCTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
