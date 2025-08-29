import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";
import Img1 from "../../../../public/images/hero.jpg";
import Button from "../Button/Button";

export default function FinalCTA() {
  return (
    <section className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgOverlay} />
        <Image src={Img1} alt='Hero Image' fill className={styles.img} />
        <div className={styles.content}>
          <LayoutWrapper>
            <div className={styles.left}>
              <h2 className={styles.heading}>Ready for a Shed-Free Sofa?</h2>
              <p className={styles.copy}>
                Comb & Collar was built around a simple idea: beautiful grooms
                happen when dogs feel safe. Our team uses fear-free handling,
                quiet dryers, and calm routines so every visit builds
                confidence. Add transparent pricing and easy online scheduling,
                and you’ve got a grooming day everyone can look forward to.
              </p>
              <div className={styles.btnContainer}>
                <Button btnType='salmon' text='Book Now' href='/' arrow />
              </div>
            </div>
          </LayoutWrapper>
        </div>
      </div>
    </section>
  );
}
