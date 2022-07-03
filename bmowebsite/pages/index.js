import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BMO_GF</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          GHOSTFACE <a href="">BMO TEST</a>
        </h1>

        <p className={styles.description}>
          The #1 subDAO!{' '}
          <code className={styles.code}></code>
        </p>

        <div className={styles.grid}>
          <a href="https://discord.gg/ZaynTKNF" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>Click here to join the BMO FAM!</p>
          </a>

          <a href="https://twitter.com/BMO_GF" className={styles.card}>
            <h2>Twitter &rarr;</h2>
            <p>Follow our Twitter to stay updated!</p>
          </a>

          <a
            href="https://magiceden.io/marketplace/ghostface_gen_2"
            className={styles.card}
          >
            <h2>Magic Eden &rarr;</h2>
            <p>Check out Ghostface GEN 2 on Magic Eden now!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
