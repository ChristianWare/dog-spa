import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./Process.module.css";

import Image from "next/image";
import Img1 from "../../../../public/images/doggyiii.jpg";

const data = [
  {
    id: 1,
    title: "Choose Your Service",
    description:
      "Select from our range of grooming, spa, and pampering services tailored for your dog’s needs.",
  },
  {
    id: 2,
    title: "Pick Your Stylist",
    description:
      "Browse our team of expert groomers and choose the stylist that best matches your preferences.",
  },
  {
    id: 3,
    title: "Select Date & Time",
    description:
      "Book a convenient appointment slot that fits your schedule—mornings, afternoons, or weekends.",
  },
  {
    id: 4,
    title: "Pay 30% Deposit",
    description:
      "Secure your booking with a quick and easy 30% deposit payment online.",
  },
  {
    id: 5,
    title: "We’ll Send Reminders",
    description:
      "Relax! We’ll send you timely reminders—just bring your good boy or girl for their spa day.",
  },
];

export default function Process() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <div className={styles.leftContent}>
                  <h2 className={styles.heading}>How it works</h2>

                  <div className={styles.imgContanier}>
                    <Image
                      src={Img1}
                      alt=''
                      title=''
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.dataContainer}>
                {data.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <h3 className={styles.title}>
                      {x.id}. {x.title}
                    </h3>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
