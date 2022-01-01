import styles from './footer.module.scss'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Link href={"https://luci-lua.tk/"}>
                        <a>
                            Portfólio
                        </a>
                    </Link>
                    <Link href={"https://github.com/LuciLua/"}>
                        <a>
                            GitHub
                        </a>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"}>
                        <a>
                            Linkedin
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer