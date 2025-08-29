import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2>How It works</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
