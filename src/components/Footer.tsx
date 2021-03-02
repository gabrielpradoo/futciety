import styles from "../styles/Footer.module.css";

interface FooterProps {
  position: "static" | "relative" | "absolute" | "sticky" | "fixed";
}

export function Footer({ position }: FooterProps) {
  return (
    <>
      <footer className={styles.footer} style={{ position: `${position}` }}>
        <p>Desenvolvido por Gabriel do Prado 🚀</p>
      </footer>
    </>
  );
}
