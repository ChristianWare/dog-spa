import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import Img2 from "../../../../public/images/doggyii.jpg";
import Button from "@/components/shared/Button/Button";
import ScrollHorizontalText from "@/components/shared/ScrollHorizontalText/ScrollHorizontalText";
import ImageCluster from "@/components/shared/ImageCluster/ImageCluster";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <ImageCluster />
            <h1 className={styles.heading}>
              <span className={styles.spark}>Good</span> dogs get
              <span className={styles.squiggly}>great grooms.</span>
            </h1>
            <p className={styles.copy}>
              Fear-free spa appointments with real-time booking and upfront
              pricing. Reserve with a 30% deposit—no phone tag, no surprises.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' text='Book a groom' btnType='salmon' />
              <Button href='/' text='See services' btnType='tanPill' />
            </div>
            <div className={styles.scrollTextContainer}>
              <ScrollHorizontalText
                text='Certified stylists'
                text2='Gentle handling'
                text3='SMS reminders'
              />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomContainer}>
              <div className={styles.b1}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img1}
                    alt=''
                    title=''
                    fill
                    className={styles.img1}
                  />
                </div>
              </div>
              <div className={styles.b2}>
                <video
                  preload='auto'
                  autoPlay
                  muted
                  loop
                  className={styles.video}
                >
                  <source src='/videos/pawtrim.mp4' />
                </video>
              </div>
              <div className={styles.b3}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img2}
                    alt=''
                    title=''
                    fill
                    className={styles.img2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
