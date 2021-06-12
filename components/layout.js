import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

export const siteTitle = "Eric's Blog"

export default function Layout({ children, home }) {
  return (
    <div className="center mw9">
      <Head>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
      
      </Head>
      <header>
          <div>
            <h2 className="blue f5 top-0">
              <Link href="/">
                <a>Eric Xia</a>
              </Link>
            </h2>
          </div>

      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  ) 
}