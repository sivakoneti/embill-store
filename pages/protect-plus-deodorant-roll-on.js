import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
    id: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
    price: "7.00",
    image: "/images/G&H-protect+-deodorant-roll-on.webp"
}

export default function roll_on() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-protect+-deodorant-roll-on.webp" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&H Protect+ Deodorant &amp; Anti Perspirant Roll-On</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Up to 48 hours of odor and wetness protection Clear and fast-drying roll-on deodorant; does not leave white marks on skin or clothes.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Exclusive technology gives a fresh fragrance burst, especially when active.</li>
                                            <li className="list-disc">Designed for use by men and women.</li>
                                            <li className="list-disc">Triclosan, wheat free and dye free.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Apply to underarm area only. Do not apply to broken skin. If a rash or irritation develops, discontinue use. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Remove cap. Turn bottle upside down. Glide the roller to dispense product onto clean, dry underarm skin. Allow the skin to dry before getting dressed.</p>
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
