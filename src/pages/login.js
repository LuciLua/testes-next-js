import { useNome } from '../context/NomeContext';
import styles from '../styles/login.module.scss'

function About() {

    const { nome, setNome } = useNome();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>
                        login page
                    </p>
                        <input placeholder='user' value={nome} onChange= { e => setNome(e.target.value)} />
                </div>
            </div>
        </>
    )
}

export default About