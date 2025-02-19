import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className={styles.h1}>Seja bem-vindo!</h1>
      <p className={styles.p}> Bem-vindo à Clínica Dom da Vida. Como vai? Como posso ajudá-lo agora?</p>
      <p className={styles.p1}>Estamos preparados para te atender com uma equipe multidisciplinar. 
      Cuidamos da sua saúde e bem-estar em um ambiente acolhedor e moderno. Contamos com uma equipe qualificada para cuidar da sua saúde e bem-estar, cuide da sua saúde com tranquilidade e segurança. Venha conhecer nossa clínica.</p>
    </main>
  );
}


