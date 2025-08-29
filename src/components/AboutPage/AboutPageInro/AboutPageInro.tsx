import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./AboutPageInro.module.css";
// import Image from "next/image";
// import Img1 from "../../../../public/images/doggyii.jpg";

export default function AboutPageIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              <span className={styles.underline}>Grooming</span> Grooming that{" "}
              <br /> puts comfort <span className={styles.spark}>first</span>
            </h1>
          </div>
          {/* <div className={styles.right}>
            <div className={styles.imgContainer}>
              <Image
                src={Img1}
                alt='About Page Image'
                fill
                className={styles.img}
              />
            </div>
          </div> */}
        </div>
      </LayoutWrapper>
    </section>
  );
}
