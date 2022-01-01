import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.scss'
import classNames from 'classnames'
import { useRef, useLayoutEffect } from 'react'

import { useNome } from '../../context/NomeContext'
import styled from 'styled-components'

function Header() {

    const containerRef = useRef()
    const navigation = useRef()

    useLayoutEffect(() => {
        console.log(containerRef.current)
    })

    const { nome, setNome } = useNome();

    const initNome = () => {
        if (!nome) {
            return 'Account'
        } else {
            return nome
        }
    }


    function menu(e) {
        containerRef.current.classList.toggle('btnActive')
        navigation.current.classList.toggle(styles.active)
        console.log(navigation.current)
    }



    return (
        <div className={classNames(styles.container)}>
            <div className={classNames(styles.content)}>
                <h1 id='h1Header'>
                    Logo
                </h1>
                <ul className={classNames(styles.nav)} ref={navigation}>
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
                                {initNome()}
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
                <div className={styles.menu} ref={containerRef} onClick={menu}>Menu</div>
            </div>
        </div>
    )
}

export default Header