import RecentWorks from "@/components/HomePage/RecentWorks/RecentWorks";
import AllServices from "@/components/ServicePage/AllServices/AllServices";
import ServicePageIntro from "@/components/ServicePage/ServicePageIntro";
import Footer from "@/components/shared/Footer/Footer";
import Testimonials from "@/components/shared/Testimonials/Testimonials";

export default function ServicesPage() {
  return (
    <main>
      <ServicePageIntro />
      <AllServices />
      <Testimonials />
      <RecentWorks />
      <Footer />
    </main>
  );
}
