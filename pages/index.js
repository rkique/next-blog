import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import {getSortedPostsData} from '../lib/posts'
import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

/*function Image() {
  const texture = useLoader(THREE.TextureLoader, "https://www.eric-xia.com/images/arrowhead.png")
  return (
    <mesh>
      <planeBufferGeometry attach="geometry" args={[3, 3]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  )
}*/

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  function clickActions(){
    window.location.href = "https://www.google.com"
    setActive(!active)
  }
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      position={2,5,0}
      onClick={(event) => clickActions()}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[5, 2, 2]} />
      <meshStandardMaterial color={hovered ? 'red' : 'orange'} />
    </mesh>
  )
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
function colorSize(size){
  if (size = "long") { }

  return (<div className="dib f5 ba pa1 ma1 b--gray">
  <Link href={`/posts/${id}`}>
  <a>{id}</a> 
  </Link>
    <p>{dateStringify(JSON.parse(dateString))}</p>
    <span className="f6 bg-light-green br3 black ph2"> {size}</span>
</div>)

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

      <div class="fl w-70 pa2">

          {allPostsData.map(({ id, date, dateString, size }) => (
            
            <previewBox id={id} dateString={dateString} size={size}/>

          ))}
      </div>
      <div class="fl w-30 pa2">
        <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
  </Canvas>
      </div>

    </Layout>
  )
}