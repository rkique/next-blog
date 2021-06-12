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

          {allPostsData.map(({ id, date, size }) => (
            <div className="dib f6 ba pa2 pv1 ma2 b--gray">
              <Link href={`/posts/${id}`}>
              <a>{id}</a> 
              </Link>
              <br />
                <p>last modified {date.split("T")[0]}, size {size}</p>
              <br />
            </div>
          ))}

      </div>

    </Layout>
  )
}