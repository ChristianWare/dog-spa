import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./RecentWorks.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";

export default function RecentWorks() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro title='Gallery' />
            <h2 className={styles.heading}>Recent Works</h2>
            <p className={styles.copy}>From our portfolio</p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
