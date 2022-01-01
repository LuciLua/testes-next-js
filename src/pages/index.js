import Image from 'next/image';
import { useNome } from '../context/NomeContext'
import styles from '../styles/home.module.scss'

function Home() {

    const { nome } = useNome();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.apresentation}>

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

                    <div className={styles.aboutContainer}>

                        <div className={styles.aboutBigText}>
                            <h1>
                                About anything very important and short
                            </h1>
                        </div>

                        <div className={styles.cards}>
                            <div className={styles.card}>
                                <div className={styles.iconeCard}>
                                    <Image
                                        src="/userImg.png"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className={styles.titleContentCard}>
                                    <h1>
                                        Title Card
                                    </h1>
                                    <p>
                                        LoremIpsum alguma coisa escrita aqui sobre esse card e que tenha a ver com o titulo...
                                    </p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconeCard}>
                                    <Image
                                        src="/userImg.png"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className={styles.titleContentCard}>
                                    <h1>
                                        Title Card
                                    </h1>
                                    <p>
                                        LoremIpsum alguma coisa escrita aqui sobre esse card e que tenha a ver com o titulo...
                                    </p>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.iconeCard}>
                                    <Image
                                        src="/userImg.png"
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div className={styles.titleContentCard}>
                                    <h1>
                                        Title Card
                                    </h1>
                                    <p>
                                        LoremIpsum alguma coisa escrita aqui sobre esse card e que tenha a ver com o titulo...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home