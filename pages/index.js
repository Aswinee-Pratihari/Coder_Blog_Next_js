import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CODER BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="/hello.js"></script>   */}
        {/* anything to be brought from public folder can be done using /filename */}
      </Head>

      {/* The Script component, next/script, allows you to optimally load third-party scripts anywhere in your Next.js application */}
      {/* <Script src='/hello.js' strategy='lazyOnload'></Script> */}

      <nav className={styles.mainnav}>
        <ul className={inter.className}>
          {/* home and about link not working */}
         <Link href='/'><li>Home</li></Link>
         <Link href='/about'scroll={false} > <li>About</li></Link>
         <Link href='/blogPages/contact'><li>Contact</li></Link>
         <Link href='/blogPages/blog'><li>Blogs</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        

        <div className={styles.center}>
         <h1 className={inter.className}>CODER BLOG</h1>
         
        </div>
        <div className="blogs" >
        <h2  className={inter.className}>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <h3  className={inter.className}>How to learn JavaScript in 2022?</h3>
          <p  className={inter.className}>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3  className={inter.className}>How to learn JavaScript in 2022?</h3>
          <p  className={inter.className}>JavaScript is the language used to design logic for the web</p>
        </div>
        <div className={styles.blogItem}>
          <h3  className={inter.className}>How to learn JavaScript in 2022?</h3>
          <p  className={inter.className}>JavaScript is the language used to design logic for the web</p>
        </div>
</div>
      </main>
    </>
  )
}
