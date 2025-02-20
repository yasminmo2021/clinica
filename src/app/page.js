//import styles from "./page.module.css";
//import Image from "next/image";

//export default function Home() {
  //return (
    //<main>
      //<h1 className={styles.h1}>Seja bem-vindo!</h1>
      //<p className={styles.p}> Bem-vindo à Clínica Dom da Vida. Como vai? Como posso ajudá-lo agora?</p>
      //<p className={styles.p1}>Estamos preparados para te atender com uma equipe multidisciplinar. </p>
      //<p className={styles.p1}>Cuidamos da sua saúde e bem-estar em um ambiente acolhedor e moderno. Contamos com uma equipe qualificada para cuidar da sua saúde e bem-estar, cuide da sua saúde com tranquilidade e segurança. Venha conhecer nossa clínica.</p>
    //</main>
  //);
//}//


import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <main>
         <h1 className={styles.h1}>Seja bem-vindo!❤️</h1>
        <p className={styles.text}>Bem-vindo à Clínica Dom da Vida, onde a sua saúde e bem-estar são nossa maior prioridade. Estamos prontos para oferecer um atendimento completo e especializado com uma equipe multidisciplinar altamente qualificada, pronta para atender às suas necessidades de forma acolhedora e humana. Nosso ambiente moderno foi pensado para proporcionar conforto e tranquilidade, oferecendo a segurança que você precisa para cuidar de sua saúde com confiança. Seja para consultas preventivas ou tratamentos especializados, estamos aqui para cuidar de você de forma integral.</p>
         <button className={styles.buttonMedic}>Agende sua consulta</button>
        
  
    </main>
    
  );
}