import styles from "./SectionIntro.module.css";

interface Props {
  title: string;
  color?: string;
  borderColor?: string;
}

export default function SectionIntro({ title, color = "" }: Props) {
  return (
    <div className={styles.container}>
      <span className={`${styles.text} ${styles[color]}`}>{title}</span>
    </div>
  );
}
