import Image from "next/image";
import LayoutWrapper from "../shared/LayoutWrapper";
import styles from "./ServicePageIntro.module.css";
import Img1 from "../../../public/images/doggyii.jpg";
import Img2 from "../../../public/images/doggyiii.jpg";
import SectionIntro from "../shared/SectionIntro/SectionIntro";

export default function ServicePageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro title='Our services' />
            <h1 className={styles.heading}>
              Professional dog grooming <br /> for happy, healthy pets
            </h1>
            <p className={styles.copy}>
              What began as an idea for a consultancy helping Europe meet its
              green standards… turned into a digital template for brands with
              standards of their own. Evermind is a modular Webflow system
              inspired by sustainable design, nature’s flow, and Brussels’ quiet
              intelligence.
            </p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='Our Services'
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={Img2}
                alt='Our Services'
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
