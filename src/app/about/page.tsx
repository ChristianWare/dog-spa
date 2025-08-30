import AboutPageIntro from "@/components/AboutPage/AboutPageInro/AboutPageInro";
import AboutServicesPreview from "@/components/AboutPage/AboutServicesPreview/AboutServicesPreview";
import Groomers from "@/components/AboutPage/Groomers/Groomers";
import SafteyAndQuality from "@/components/AboutPage/SafteyAndQuality/SafteyAndQuality";
import RecentWorks from "@/components/HomePage/RecentWorks/RecentWorks";
import Footer from "@/components/shared/Footer/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <AboutServicesPreview />
      <Groomers />
      <SafteyAndQuality />
      <RecentWorks />
      <Footer />
    </main>
  );
}
