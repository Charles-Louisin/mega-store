import Image from 'next/image'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftMainDown}>
                <Image className={styles.imgLogo} src={'/realMatch.png'} alt='logo' width={100} height={100} />
                <p className={styles.textLogo}><strong>Mega</strong>Store</p>
            </div>
            <div className={styles.rightMainDown}>
                <p className={styles.textLogo}>
                    <small>2024 &copy; <strong>Mega</strong>Store</small>
                </p>
            </div>
        </footer>
    )
}

export default Footer