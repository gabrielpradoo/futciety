import { GetServerSideProps } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { getFields } from "../database/getFields";

import styles from "../styles/Fields.module.css";

export default function Fields({ data }) {
  console.log(data);
  return (
    <>
      <Header page="Fields" />
      <div className={styles.cardsContainer}>
        {data.map((item) => {
          return (
            <div className={styles.card}>
              <div className={styles.img}>
                <img src={item.fieldImage} alt="" />
              </div>
              <div className={styles.cardContent}>
                <h2>{item.fieldName}</h2>
                <h4>{item.propertyName}</h4>

                <span>
                  {item.opening}hr - {item.closure}hr
                </span>

                <p>
                  {item.address}, {item.address2}
                </p>

                <div className={styles.buttons}>
                  <a href="" className={styles.email}>
                    Mande um e-mail
                  </a>
                  <a href="" className={styles.wpp}>
                    Mande um Whats
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Footer isPositionAbsolute={false} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSideProps) {
  const data = await getFields();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    }, // will be passed to the page component as props
  };
}
