'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Navbar = () => {

    const [hide, setHide] = useState(false)

    return (
        <div className={styles.main}>
            <div className={styles.upMain}>
                <h3>Developpé par <strong>Charles Louisin</strong></h3>
            </div>
            <div className={styles.downMain}>
                <div className={styles.leftMainDown}>
                    <Image className={styles.imgLogo} src={'/realMatch.png'} alt='logo' width={100} height={100} />
                    <p className={styles.textLogo}><strong>Mega</strong>Store</p>
                </div>
                <ul className={styles.centerMainDown}>
                    <li>Acceuil</li>
                    <li>À propos</li>
                    <li>Partenariats</li>
                    <li>Réalisations</li>
                </ul>
                <div className={styles.rightMainDown}>
                    <div className={styles.iconSearch}>
                        <FaSearch className={styles.icon} />
                    </div>
                    <Link className={styles.connexion} href={'/login'}>Connexion</Link>
                </div>
                <div className={styles.iconHmgrContain}>
                    <FaBars onClick={()=>setHide(!hide)} className={styles.iconHmgr} />
                </div>


                {/* 
                ============================================
                ============================================
                */}


                {hide && (
                    <div className={styles.menuContain}>
                    <div className={styles.MenuContain}>
                        <div className={styles.upMenuContain}>
                            <div className={styles.leftMenuContain}>
                                <div className={styles.leftMenu}>
                                    <Image className={styles.imgLogoMenu} src={'/realMatch.png'} alt='logo' width={100} height={100} />
                                    <p className={styles.textLogoMenu}><strong>Mega</strong>Store</p>
                                </div>
                                <h1>MENU</h1>
                            </div>

                            <div className={styles.rightMenuContain}>
                                <FaArrowRight onClick={()=>setHide(!hide)} className={styles.iconMenuArrow} />
                                <FaSearch className={styles.iconMenuSearch} />
                            </div>
                        </div>


                        <div className={styles.navMenuContain}>
                            <ul className={styles.navCenterMainDown}>
                                <li>Acceuil</li>
                                <li>À propos</li>
                                <li>Partenariats</li>
                                <li>Réalisations</li>
                            </ul>
                        </div>

                        <div className={styles.downNavMenu}>
                            <Link className={styles.connexion} href={'/login'}>Connexion</Link>
                        </div>
                    </div>

                </div>
                )}


            </div>
        </div>
    )
}

export default Navbar