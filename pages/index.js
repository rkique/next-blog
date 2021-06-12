import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        <p>Hello! I'm Eric. </p>

      <div>

          {allPostsData.map(({ id, date, dateString, size }) => (
            <div className="dib f5 ba pa1 ma1 b--gray">
              <Link href={`/posts/${id}`}>
              <a>{id}</a> 
              </Link>
                <p>{JSON.parse(dateString)}</p>
                <span className="f6 bg-light-green br3 black ph2"> {size}</span>
            </div>
          ))}
      </div>

    </Layout>
  )
}