// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
import Image from "next/image";
import styles from "./AllServices.module.css";
import { services } from "@/lib/data";

export default function AllServices() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introInfo}>
          {/* <SectionIntro title='What we do' /> */}
          <h2 className={styles.heading}>All packages</h2>
        </div>
        <div className={styles.dataContainer}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.cardLeft}>
                <span className={styles.id}>{service.id}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles.featuresMapContainer}>
                  {service.features.map((feature) => (
                    <div key={feature.id} className={styles.feature}>
                      <h4>{feature.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.cardRight}>
                <div className={styles.imgContainer}>
                    <Image src={service.src} fill alt={service.title}  className={styles.img} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
