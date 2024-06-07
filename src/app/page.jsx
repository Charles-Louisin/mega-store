import Navbar from "@/Components/Navbar/Navbar";
import styles from './page.module.css'
import Image from "next/image";
import Footer from "@/Components/Footer/Footer";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import Cards from "@/Components/Cards/Cards";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      <div className={styles.intro}>
        <div className={styles.left}>
          <div className={styles.containIntro}>
            <h1 className={styles.logoTitle}><strong>MEGA</strong>STORE</h1>
            <h1 className={styles.logoDesc}>MEGASTORE au service de votre entreprise</h1>
            <p className={styles.siteDesc}>
              <strong>MegaStore</strong> est un portfolio
              créé pour la publicité de nos services <mark>de créateur de sites web</mark>.
              Pour vous permettre de visualiser les différents types de sites que
              nous pouvons réaliser et les différentes fonctionnalités implementées.
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <video className={styles.videoPlay} src="/set.mp4" type="video/mp4" loop autoPlay muted />
        </div>
      </div>

      <Cards />

      <Footer />
    </div>
  );
}
