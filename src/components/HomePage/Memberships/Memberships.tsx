import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Memberships.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/hero.jpg";
import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Button from "@/components/shared/Button/Button";

const data = [
  {
    id: 1,
    title: "Tailored solutions to fit your needs.",
  },
  {
    id: 2,
    title: "Strict GMP quality control.",
  },
  {
    id: 3,
    title: "Flexibility with complex projects.",
  },
  {
    id: 4,
    title: "Trustworthy and transparent partnership.",
  },
];

export default function Memberships() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill title='' alt='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <SectionIntro title='Membership Benefits' color='bisque' />
            <h2 className={styles.heading}>
              Syntho combines deep expertise, advanced technologies, and an
              unwavering commitment to quality.
            </h2>
            <p className={styles.copy}>w
              Our memberships are designed to provide exceptional value and
              support to our clients, ensuring they have access to the best
              resources and expertise in the industry.
            </p>
            <div className={styles.dataMapBox}>
              {data.map((item) => (
                <div key={item.id} className={styles.dataMapItem}>
                  • {item.title}
                </div>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button href='/booking' text='Book now' btnType='tan' arrow />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
