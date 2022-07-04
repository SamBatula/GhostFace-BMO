import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BMO_GF</title>
        <meta name="description" content="Welcome to BMO. IYKYK" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <main className={styles.main}>
      <div className="firstdiv">
      <h1 className={styles.title}>
          Home of BMO
        </h1>

        <p className={styles.description}>
          The #1 subDAO!
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
            href="https://magiceden.io/marketplace/ghostface_gen_2?attributes=%7B%22Cloak%22%3A%5B%5D%2C%22Clothes%22%3A%5B%5D%2C%22Eyes%22%3A%5B%22BMO%22%5D%7D" className={styles.card}
          >
            <h2>Magic Eden &rarr;</h2>
            <p>BMO Ghostface!</p>
          </a>

          <a
            href="https://magiceden.io/marketplace/bmo_access_pass" className={styles.card}
          >
            <h2>BMO Access Pass &rarr;</h2>
            <p>Wen Utility? IYKYK!</p>
          </a>

          <a
            href="https://bmo.floppylabs.io" className={styles.card}
          >
            <h2>Stake Access Pass &rarr;</h2>
            <p>Earn $BMO. Enter raffles!</p>
          </a>

        </div>
         </div>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/maktublabs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/maktub2.png" alt="Vercel Logo" width={75} height={75} />
          </span>
        </a>
      </footer>
    </div>
  )
}
