import styles from './Frase.module.css'

function Frase() {
    return(
        <div className={styles.fraseConteiner}>
            <p className={styles.fraseContent}>Componente Frase, Olá O Surf</p>
        </div>
    )

}

export default Frase