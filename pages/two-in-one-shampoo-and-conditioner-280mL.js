import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
    id: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
    price: "9.25",
    image: "/images/satinique-2-in-1-shampoo-and-conditioner-280mL.jpg"
}

export default function shampoo_and_conditioner_280mL() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/satinique-2-in-1-shampoo-and-conditioner-280mL.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Satinique 2 in 1 Shampoo and Conditioner - 280mL</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Clean and condition in one step. Cleanse and condition in one simple step, leaving hair totally prepared for styling.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Gentle formula conveniently cleanses, nourishes, and conditions hair.</li>
                                            <li className="list-disc">Infused with a blend of borage seed oil and vitamin E, the Satinique™ 2 in 1 formula helps moisturize, smooth, and protect hair.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply to wet hair, massage into a lather and rinse.</p>
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
