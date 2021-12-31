import styles from '../styles/account.module.scss'
import { dataUser } from '../api/dataUser'
import { useNome } from '../context/NomeContext'

export const getStaticProps = async (ctx) => {
    const data = await dataUser() // consultando api armazenada na funcao dataUser
    return {
        props: {
            data
        }
    }
}


export default function Account(props) {

    // recebendo dados da API e armazenando na const allData
    const { allData } = props.data 

    // armazenando valor de nome na constante nome desestruturando de useNome(), contextAPI
    const { nome } = useNome() 

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p>
                        account page of {nome}
                    </p>
                    <div className={styles.big}>
                        <p>
                            Name: {allData.name}
                        </p>
                        <p>
                            Type: {allData.type}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

