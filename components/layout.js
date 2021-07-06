import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = "Eric's Blog"

export default function Layout({ children, home }) {
  return (
    <div className="center mw9">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      <script src="/../public/masonry.pkgd.min.js"></script>
      </Head>
      <header>
          <div>
          </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
        </div>
      )}
    </div>
  ) 
}