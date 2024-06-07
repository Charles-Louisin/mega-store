import React from 'react'
import styles from './Cards.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Cards = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <Link href={'/match'}>
                    <Image className={styles.imageCard} src={'/CaptureMatch.PNG'} alt='image' height={500} width={500} />
                </Link>
                
                <div className={styles.others}>
                    <p className={styles.nameCard}>Reseau social <Link href={'/match'}><strong>MATCH</strong></Link></p>
                    <p className={styles.descCard}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis nobis accusantium odio, modi, laborum voluptate cum obcaecati temporibus ratione dignissimos amet ipsam maiores voluptatibus cupiditate voluptates libero dolorum quam nulla quibusdam nam porro asperiores. Officia soluta nostrum amet itaque quaerat aut, impedit corporis. Sint excepturi veniam natus tempore nihil?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards