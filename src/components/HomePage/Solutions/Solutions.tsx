import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Solutions.module.css";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import Img1 from "../../../../public/images/doggyii.jpg";
import Img2 from "../../../../public/images/doggyiii.jpg";

export default function Solutions() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionIntro title='Human Intelligence' />
            <h2 className={styles.heading}>
              We create solutions that not only push technological
            </h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.b1}>
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
            <div className={styles.b2}>
              <h3 className={styles.headingii}>
                Working with Human Intelligence was a game-changer for our
                company. Their unique approach to integrating biology with
                cutting-edge technology has transformed how we operate.
              </h3>
              <div>
                <span className={styles.person}>Jessica Mendez</span>
                <p className={styles.company}>Greenway Enterprises</p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='Doggy II'  className={styles.img} />
              </div>
            </div>
            <div className={styles.b3}>
              <h3 className={styles.headingii}>
                The team at Human Intelligence provided insights we had never
                considered before. Their expertise in merging natural systems
                with advanced technology gave us a competitive edge in the
                market.
              </h3>
              <div>
                <span className={styles.person}>Mark Taylor</span>
                <p className={styles.company}>Greenway Enterprises</p>
              </div>
              <div className={styles.imgContainer}>
                <Image src={Img2} alt='Doggy III'  className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
