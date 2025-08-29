import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";
import Img1 from "../../../../public/images/hero.jpg";
import Button from "../Button/Button";

export default function FinalCTA() {
  return (
    <section className={styles.parent}>
      <LayoutWrapper>
        <div className={styles.container}>
          <div className={styles.imgOverlay} />
          <Image src={Img1} alt='Hero Image' fill className={styles.img} />
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Ready for a Shed-Free Sofa?</h2>
              <p className={styles.copy}>
                Book your first appointment today and experience the joy of a shed-free home.
              </p>
            <div className={styles.btnContainer}>
              <Button btnType='salmon' text='Book Now' href='/' arrow />
            </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
