import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Nutrilite™ Vitamin C Extended Release - 60 Tablets",
    id: "Nutrilite Vitamin C - 60 Tablets",
    price: "22.60",
    image: "/images/vitamin-c.jpg"
}

export default function vitamin_c() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/vitamin-c.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Vitamin C Extended Release - 60 Tablets</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Plant-based supplement with 500 mg of vitamin C for all-day immune support</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Made with acerola cherries, one of nature's most concentrated forms of vitamin C, grown on our certified organic farms.</li>
                                            <li className="list-disc">Slow, steady release over an 8-hour period for improved utilization of vitamin C.</li>
                                            <li className="list-disc">Includes ascorbic acid and phytonutrients that provide antioxidant protection from free radicals.</li>
                                            <li className="list-disc">Scientific research has shown that vitamin C plays an important role in maintaining healthy tissues and supporting immune system function.</li>
                                            <li className="list-disc">Easy-to-swallow, ideal for sensitive stomachs.</li>
                                            <li className="list-disc">Lactose and fructose free.</li>
                                            <li className="list-disc">Does not contain any artificial flavors, colors, preservatives or sweeteners.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 12 years of age, pregnant or nursing women, or anyone with a medical condition should consult with a physician before using this product. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Take one tablet daily.</p>
                                        <div className="flex space-x-3 mb-4 text-sm font-medium mt-4">
                                            <div className="flex-auto flex space-x-4">
                                                <button className="snipcart-add-item snipcart-checkout w-1/2 h-9 flex items-center justify-center rounded-md bg-black text-white" type="submit"
                                                        data-item-id={details.id}
                                                        data-item-price={details.price}
                                                        data-item-url="/"
                                                        data-item-image={details.image}
                                                        data-item-name={details.title}>
                                                    Buy now
                                                </button>
                                                <button className="snipcart-add-item w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button"
                                                        data-item-id={details.id}
                                                        data-item-price={details.price}
                                                        data-item-url="/"
                                                        data-item-image={details.image}
                                                        data-item-name={details.title}>
                                                    Add to bag
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
