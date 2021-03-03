import { CSSProperties } from "react";
import styles from "../styles/Footer.module.css";

interface FooterProps {
  isPositionAbsolute: boolean;
}

export function Footer({ isPositionAbsolute }: FooterProps) {
  return isPositionAbsolute ? (
    <>
      <footer
        className={styles.footer}
        style={{
          position: "absolute",
        }}
      >
        <p>Desenvolvido por Gabriel do Prado 🚀</p>
      </footer>
    </>
  ) : (
    <>
      <footer
        className={styles.footer}
        style={{
          position: "static",
        }}
      >
        <p>Desenvolvido por Gabriel do Prado 🚀</p>
      </footer>
    </>
  );
}
