import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'
import classNames from 'classnames'

function Header() {

    function closeMenu() {

        const nav = document.querySelector('#navHeader')
        const container = document.querySelector("#containerHeader")
        const h1 = document.querySelector("#h1Header")
        
        container.style.height = '80px'
        nav.style.display = 'none'
        h1.style.display = 'flex'
        
    }
    
    function openMenu() {
        
        const nav = document.querySelector('#navHeader')
        const container = document.querySelector("#containerHeader")
        const h1 = document.querySelector("#h1Header")
        
        container.style.height = '100vh'
        nav.style.display = 'flex'
        h1.style.display = 'none'

    }

    return (
        <>
            <div className={classNames(styles.container, 'container')} id='containerHeader'>
                <div className={classNames(styles.content, 'content')}>
                    <h1 id='h1Header'>
                        Logo
                    </h1>
                    <ul className={classNames(styles.nav, 'nav')} id='navHeader'>
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
                                <div className={styles.closeMenu} onClick={closeMenu}>

                                </div>
                            </a>
                        </Link>
                    </ul>
                    <div className={styles.menu} onClick={openMenu} id='menu'>Menu</div>
                </div>
            </div>
        </>
    )
}

export default Header