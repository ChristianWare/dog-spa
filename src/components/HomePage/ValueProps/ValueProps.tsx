import LayoutWrapper from "@/components/shared/LayoutWrapper";
import styles from "./ValueProps.module.css";
import Clock from "@/components/icons/Clock/Clock";
import Calendar from "@/components/icons/Calendar/Calendar";
import Deposit from "@/components/icons/Deposit/Deposit";
import House from "@/components/icons/House/House";

const data = [
  {
    id: 1,
    heading: "Fear-Free Handling",
    copy: "Calm techniques, slow introductions, and comfort-first stations help reduce anxiety.",
    icon: <Clock className={styles.icon} />,
  },
  {
    id: 2,
    heading: "Upfront Pricing",
    copy: "Clear starting rates by size and coat type—no mysteries at pickup.",
    icon: <Deposit className={styles.icon} />,
  },
  {
    id: 3,
    heading: "Online Everything",
    copy: "Pick a service, choose a stylist, select a time, pay the deposit. Done in minutes.",
    icon: <Calendar className={styles.icon} />,
  },
  {
    id: 4,
    heading: "Clean & Safe",
    copy: "Hospital-grade sanitation for tubs, tools, and tables after every appointment.",
    icon: <House className={styles.icon} />,
  },
];

export default function ValueProps() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              {item.icon}
              <h3 className={styles.heading}>{item.heading}</h3>
              <p className={styles.copy}>{item.copy}</p>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
