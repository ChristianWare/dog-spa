import styles from "./ScrollHorizontalText.module.css";

interface Props {
  text: string;
  text2: string;
  text3: string;
}

export default function ScrollHorizontalText({ text, text2, text3 }: Props) {
  return (
    <div className={styles.slider}>
      <div className={styles.track}>
        {[...Array(50)].map((_, index) => (
          <div key={index} className={styles.text}>
            {text}
            <span className={styles.span}>•</span>
            {text2}
            <span className={styles.span}>•</span>
            {text3}
            <span className={styles.span}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
