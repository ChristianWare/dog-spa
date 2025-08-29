import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              <span className={styles.spark}>Good</span> dogs get{" "}
              <span className={styles.squiggly}>great grooms</span>.
            </h1>
            <p className={styles.copy}>
              Fear-free spa appointments with real-time booking and upfront
              pricing. Reserve with a 30% deposit—no phone tag, no surprises.
            </p>
          </div>
          <div className={styles.bottom}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
