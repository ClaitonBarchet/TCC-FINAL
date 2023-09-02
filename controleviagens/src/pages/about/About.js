import styles from "./About.module.css"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o controle de viagens</h2>
        <p>
            Este é o sistema de controle de viagens, desenvolvido para controlar o carregamento de agregados!
        </p>
        <p>
        <Link to = "/" className="btn">Voltar</Link>
        </p>
        <p>
           Desenvolvido por: Claiton Ricardo M. Barchet
        </p>
    </div>
  )
}

export default About