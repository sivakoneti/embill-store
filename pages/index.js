import Head from 'next/head'
import Navbar from '../components/nav'
import Store from '../components/store'
import Footer from '../components/footer'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Store />
        <Footer />
      </main>
    </div>
  )
}
