import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Nutrilite™ Go Shield – Immunity Gummies",
    id: "Nutrilite Go Shield – Immunity Gummies",
    price: "16.20",
    image: "/images/immunity-gummies.webp"
}

export default function immunity_gummies() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/immunity-gummies.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Go Shield – Immunity Gummies</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Stay prepped and ready all year long. Our gummies are made with a blend of elderberry – a centuries-old berry with immunity-supporting compounds, antioxidant Vitamin C for natural immunity protection and zinc – a trace element needed for a healthy immune defense system.† Plus, they’re vegetarian-friendly without any artificial colors, flavors or preservatives. It’s 3-in-1 immunity support, 365.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Vegetarian.</li>
                                            <li className="list-disc">Gluten free, dairy free and soy free.</li>
                                            <li className="list-disc">Free from peanuts, tree nuts, eggs, high-fructose corn syrup, shellfish and crustaceans.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>If you have a medical condition, long-term stress disorder or chronic illness; are taking prescription drugs; or are pregnant or nursing, please consult your healthcare professional
                                        prior to use.

                                        Store in a cool, dry place.

                                        KEEP OUT OF REACH OF CHILDREN.

                                        †This statement has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Adults: Take 2 gummies daily. Chew thoroughly before swallowing.</p>
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
