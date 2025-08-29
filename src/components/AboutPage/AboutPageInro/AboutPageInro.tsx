import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageInro.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/doggyiii.jpg";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";
import AboutPage from "@/app/about/page";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              {/* <span className={styles.underline}>Grooming</span> Grooming that{" "}
              <br /> puts comfort <span className={styles.spark}>first</span> */}
              <span className={styles.underline}>Your fluffy </span> <br />{" "}
              friend is in our
              <br /> safe and caring <span className={styles.spark}>hands</span>
            </h1>
            <p className={styles.subheading}>
              We are a small firm with 15 dedicated employees that provide all
              kinds of pet care services in New York.
            </p>
            <SectionIntro title="What we're al about here" />
            <p className={styles.copy}>
              Comb & Collar was built around a simple idea: beautiful grooms
              happen when dogs feel safe. Our team uses fear-free handling,
              quiet dryers, and calm routines so every visit builds confidence.
              Add transparent pricing and easy online scheduling, and you’ve got
              a grooming day everyone can look forward to.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' text='Book a groom' btnType='salmon' arrow />
              <Button
                href='/'
                text='Meet the Stylists'
                btnType='tanPill'
                arrow
              />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='About Page Image'
                fill
                className={styles.img}
              />
            </div>
          </div>
        </div>
        <AboutPage />
      </LayoutWrapper>
    </section>
  );
}
