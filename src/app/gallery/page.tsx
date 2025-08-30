import PhotoGroup from "@/components/GalleryPage/PhotoGroup/PhotoGroup";
import RecentWorks from "@/components/HomePage/RecentWorks/RecentWorks";
import Footer from "@/components/shared/Footer/Footer";
import Testimonials from "@/components/shared/Testimonials/Testimonials";

export default function GalleryPage() {
  return (
    <main>
      <PhotoGroup />
      <Testimonials />
      <RecentWorks />
      <Footer />
    </main>
  );
}
