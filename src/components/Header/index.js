import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'
import classNames from 'classnames'

function Header() {
    return (
        <>
            <div className={classNames(styles.container)}>
                <div className={classNames(styles.content)}>
                    <h1 id='h1Header'>
                        Logo
                    </h1>
                    <ul className={classNames(styles.nav)}>
                        <Link href='/'>
                            <a>
                                <li>
                                    Home
                                </li>
                            </a>
                        </Link>
                        <Link href='/login'>
                            <a>
                                <li>
                                    Login
                                </li>
                            </a>
                        </Link>
                        <Link href='/account'>
                            <a>
                                <li>
                                    Account
                                </li>
                                <div className={styles.imgProfile}>
                                    <Image
                                        layout='fill'
                                        src="/userImg.png"
                                    />
                                </div>
                                <div className={styles.closeMenu}>

                                </div>
                            </a>
                        </Link>
                    </ul>
                    <div className={styles.menu}>Menu</div>
                </div>
            </div>
        </>
    )
}

export default Header