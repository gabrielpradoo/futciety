import Link from "next/link";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  page: string;
}

export function Header({ page }: HeaderProps) {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="/svg/logo.svg" alt="Futciety Logo" />
        </div>

        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            {page === "NewField" ? (
              <Link href="/fields">
                <a>Encontre um campo</a>
              </Link>
            ) : (
              <Link href="/newfield">
                <a>Cadastre um campo</a>
              </Link>
            )}
          </li>
          <li>
            <Link href="">
              <a>Sobre Nós</a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>Contato</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
