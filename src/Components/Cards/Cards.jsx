import React from 'react'
import styles from './Cards.module.css'
import Image from 'next/image'

const Cards = () => {
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                    <Image className={styles.imageCard} src={'/CaptureMatch.PNG'} alt='image' height={500} width={500} />
                
                <div className={styles.others}>
                    <p className={styles.nameCard}>Reseau social <strong>MATCH</strong></p>
                    <p className={styles.descCard}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non perferendis nobis accusantium odio, modi, laborum voluptate cum obcaecati temporibus ratione dignissimos amet ipsam maiores voluptatibus cupiditate voluptates libero dolorum quam nulla quibusdam nam porro asperiores. Officia soluta nostrum amet itaque quaerat aut, impedit corporis. Sint excepturi veniam natus tempore nihil?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards