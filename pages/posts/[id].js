//displays posts at custom url slugs

import Layout from '../../components/layout'

import Head from 'next/head'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

//here is the postData object we get access to below
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article className="measure center">
            <h1>{postData.title}</h1>
            <div>
                <p>{postData.date}</p>
            </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
        <br />
        <hr></hr>
        {postData.id}
        </article>
      </Layout>
    )
  }