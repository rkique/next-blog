import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
function dateStringify(thisDate){
  thisDate = new Date(thisDate)
  let dateString
  //if within 10 minutes
  let diff = Math.abs(Date.now() - thisDate)
  if (diff < 120000){
    dateString = "just now"
  }
  //else if within the hour
  else if(diff < 7200000){
    dateString = (diff/60000).toFixed(0) + " minutes ago"
  }
  //else if within 48 hours
  else if(diff < 172800000){
    dateString = (diff/3600000).toFixed(0) + " hours ago"
  }
  //else if within the month
  else if(diff < 2628000000){
    dateString = (diff/86400000).toFixed(0) + " days ago"
  }

  //else display date
  else 
  {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateString = thisDate.toLocaleDateString("en-US", options)
  }
  return dateString;
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

        <p>The passion of the scientist, the precision of the artist. Everything here is a work in progress :)</p>

      <div>

          {allPostsData.map(({ id, date, dateString, size }) => (
            
            <div className="dib f5 ba pa1 ma1 b--gray">
              <Link href={`/posts/${id}`}>
              <a>{id}</a> 
              </Link>
                <p>{dateStringify(JSON.parse(dateString))}</p>
                <span className="f6 bg-light-green br3 black ph2"> {size}</span>
            </div>
          ))}
      </div>

    </Layout>
  )
}