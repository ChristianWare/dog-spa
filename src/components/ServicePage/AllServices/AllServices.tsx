// import SectionIntro from "@/components/shared/SectionIntro/SectionIntro";
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
              <span className={styles.id}>{service.id}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className={styles.featuresMapContainer}>
                {service.features.map((feature) => (
                  <div key={feature.id} className={styles.feature}>
                    <h4>{feature.title}</h4>
                    {/* <p>{feature.details}</p> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
