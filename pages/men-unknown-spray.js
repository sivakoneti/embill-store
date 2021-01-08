import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Artistry Men Unknown Eau de Parfum Spray",
    id: "Artistry Men Unknown Eau de Parfum Spray",
    price: "63.00",
    image: "/images/artistry-men-unknown-spray.jpg"
}

export default function men_unknown_spray() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-men-unknown-spray.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Men Unknown Eau de Parfum Spray</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Create your own mark with Artistry Men Unknown™, a masculine fragrance leaving you ready to face the world. A distinctively masculine mix of fresh, green and smoky notes carefully crafted for a memorable experience.
                                        Artistry Men Unknown™ was developed by the award-winning fragrance house of IFF (International Flavors and Fragrances). Treat yourself to this affordable luxury you can enjoy every day. Add an aura of success, confidence and masculinity.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Top note: Bergamot - famously grown in southern Italy this crisp, zesty, uplifting note is derived from a citrus fruit.</li>
                                            <li className="list-disc">Middle note: Clary Sage - green, soft and slightly sweet, this northern Mediterranean herb has a calming effect.</li>
                                            <li className="list-disc">Base note: Patchouli - a member of the mint family from Indonesia, the rich, woody scent grounds the fragrance with masculinity.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Lightly spray your Artistry Men Unknown™ Eau de Parfum onto your skin at one or two pulse points (base of the throat, side of the neck, the chest, inside the wrist), where your body's heat will release the scent. Just one or two pulse points are enough for the scent to last up to 8 hours.
For the longest-lasting fragrance experience, apply after showering while pores are open and spray from several inches away to disperse evenly over skin.</p>
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
