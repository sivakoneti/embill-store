import Head from 'next/head'
import Navbar from '../components/nav'
import Carousel from '../components/carousel'
import Bath_And_Body_Care from '../components/bath_and_body_care'
import Dish_And_Laundry from '../components/dish_and_laundry'
import Fragrance from '../components/fragrance'
import Hair_Care from '../components/hair_care'
import Oral_Care from '../components/oral_care'
import Other_Products from '../components/other_products'
import Skin_And_Make_Up from '../components/skin_and_make_up'
import Vitamins_And_Supplements from '../components/vitamins_and_supplements'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <Navbar />
        <Carousel />
        <Bath_And_Body_Care />
        <Dish_And_Laundry />
        <Fragrance />
        <Vitamins_And_Supplements />
        <Hair_Care />
        <Oral_Care />
        <Other_Products />
        <Skin_And_Make_Up />
        <Footer />
      </main>
      <script async src="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js"></script>
      <div
        id="snipcart"
        data-config-add-product-behavior="none"
        data-config-modal-style="side"
        data-api-key="NGNhY2MzOTEtYzdiMS00ODk0LWI5NzMtNTgyMjFiZGFlZmVhNjM3MzYwNjg4OTAxNTYxMDAy"
        hidden>
      </div>
    </div>
  )
}
