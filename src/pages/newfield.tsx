import { useState } from "react";
import styles from "../styles/NewField.module.css";

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CreateNewField() {
  const [fieldName, setFieldName] = useState<string>();
  const [propertyName, setPropertyName] = useState<string>();
  const [fieldImage, setFieldImage] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [whatsapp, setWhatsapp] = useState<string>();
  const [opening, setOpening] = useState<any>();
  const [closure, setClosure] = useState<any>();
  const [address, setAddress] = useState<string>();
  const [address2, setAddress2] = useState<string>();

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <img src="/svg/logo.svg" alt="Futciety Logo" />
          </div>

          <ul className={styles.list}>
            <li>
              <a href="">Cadastre seu Campo</a>
            </li>
            <li>
              <a href="">Sobre Nós</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </div>
      </header>
      <section className={styles.main}>
        <form action="">
          <h1>
            Cadastro do <br />
            campo ou quadra
          </h1>

          <fieldset>
            <legend>Dados Gerais</legend>

            <div className={styles.field}>
              <label htmlFor="fieldName">Nome do Campo/Quadra</label>
              <input
                required
                type="text"
                value={fieldName}
                onChange={(e) => setFieldName(e.target.value)}
                name="fieldName"
                id="fieldName"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="propertyName">
                Nome do Proprietário/Instituição
              </label>
              <input
                required
                type="text"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
                name="propertyName"
                id="propertyName"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="fieldImage">Link da Imagem do Local</label>
              <input
                type="text"
                name="fieldImage"
                value={fieldImage}
                onChange={(e) => setFieldImage(e.target.value)}
                id="fieldImage"
                placeholder="https://linkdasuaimagem.com"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Contato</legend>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="email">E-mail</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="email"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  required
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  name="whatsapp"
                  id="whatsapp"
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Horários</legend>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="opening">Abre às</label>
                <input
                  type="time"
                  value={opening}
                  onChange={(e) => setOpening(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="closure">Fecha às</label>
                <input
                  type="time"
                  value={closure}
                  onChange={(e) => setClosure(e.target.value)}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>

            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label htmlFor="address">Endereço</label>
                <input
                  required
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  name="address"
                  id="address"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="address2">Número</label>
                <input
                  required
                  type="text"
                  value={address2}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAddress2(e.currentTarget.value)
                  }
                  name="address2"
                  id="address2"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
}
