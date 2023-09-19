import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about} data-bs-theme="light" style={{ backgroundImage: "url(/Wallpaper.jpg)" }}>
     {/* <div className={styles.about}> */}
        <h2>Sobre o controle de viagens</h2>
        <Link to = "/" className="btn">Voltar</Link>
        <p>
        <h5>Este é o sistema de controle de viagens, desenvolvido para controlar o carregamento de agregados!</h5>
        </p>
        <p>
          <h5>Desenvolvido por: Claiton Ricardo M. Barchet</h5>
        </p>
    </div>
  )
}

export default About