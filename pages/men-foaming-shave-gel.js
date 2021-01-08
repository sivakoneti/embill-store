import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "G&H Soothe+ For Men Foaming Shave Gel",
    id: "G&H Soothe+ For Men Foaming Shave Gel",
    price: "11.50",
    image: "/images/G&H-soothe+-for-men-foaming-shave-gel.jpg"
}

export default function shave_gel() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-soothe+-for-men-foaming-shave-gel.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Soothe+ For Men Foaming Shave Gel</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">The special blend of chamomile, aloe and vitamin E in G&amp;H Soothe+ For Men Foaming Shave Gel softens beard hair for an easy shave from start to finish. Gel formula transforms into a rich foam to condition skin.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Rich foaming texture increases razor glide.</li>
                                            <li className="list-disc">Licorice Root extract helps soothe the skin.</li>
                                            <li className="list-disc">Dermatologist tested.</li>
                                            <li className="list-disc">Suitable for sensitive skin.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Avoid spraying in eyes. Contents under pressure. Do not place in hot water or near radiators, stoves or other sources of heat. Do not puncture or incinerate container (even when empty) or store at temperatures over 50º C/120º F. Extremely flammable: Do not use in the presence of open flame, sparks or while smoking. Use only as directed. Intentional misuse by deliberately concentrating and inhaling the contents can be harmful or fatal. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Wash face and keep wet. Hold can up, spray the gel onto hands, lather and spread over face. Rinse face after shaving. Follow with G&amp;H Soothe+ After Shave Balm to help calm skin and protect against irritation after shaving.</p>
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
