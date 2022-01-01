import { useNome } from '../context/NomeContext'
import styles from '../styles/home.module.scss'

function Home() {

    const { nome } = useNome();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.leftContent}>

                        <h1>
                            Hello, {nome}
                        </h1>
                        <p>
                            Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos...
                        </p>
                        <button>Know</button>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.cubeImg}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home