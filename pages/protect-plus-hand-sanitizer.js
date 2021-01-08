import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
    id: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
    price: "10.00",
    image: "/images/G&H-protect+-hand-sanitizer.jpg"
}

export default function hand_sanitizer() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-protect+-hand-sanitizer.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Kills 99.99% of common germs and bacteria on the skin surface quickly. Protect yourself and your family by keeping your hands clean. Kill 99.99% of common germs and bacteria while moisturizing your hands with Pro-Vitamin B5 and aloe essence.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Formula with Pro-Vitamin B5 helps to hydrate and soften skin.</li>
                                            <li className="list-disc">Aloe essence helps keep skin soft and moisturized.</li>
                                            <li className="list-disc">Non-drying formula.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>For external use only. Flammable. Keep away from heat or flame.
                                        Do not use: On children less than 2 years of age and On open skin wounds
                                        When using this product, keep out of eyes, ears and mouth. In case of contact with eyes, rinse eyes thoroughly with water.
                                        Stop use and consult a doctor if irritation or rash occurs. These may be signs of a serious condition.
                                        Keep out of reach of children. If swallowed, get medical help or contact a Poison Control Center immediately. Store between 15–30ºC (59–86ºF). Avoid freezing and excessive heat above 40ºC (104ºF).</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply hand sanitizer to help reduce bacteria that potentially can cause disease. For use when soap and water are not available. Place enough product on hands to cover all surfaces. Rub hands together until dry. Supervise children under 6 years of age when using this product to avoid swallowing.</p>
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
