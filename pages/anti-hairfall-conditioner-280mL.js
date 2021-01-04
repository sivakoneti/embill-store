import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Satinique Anti-Hairfall Conditioner - 280mL",
    id: "Satinique Anti-Hairfall Conditioner - 280mL",
    price: "9.75",
    image: "/images/satinique-anti-hairfall-conditioner-280mL.jpg"
}

export default function hairfall_conditioner_280mL() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/satinique-anti-hairfall-conditioner-280mL.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Satinique Anti-Hairfall Conditioner - 280mL</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Anti-Hairfall conditioner works to reduce hair loss from breakage, while invigorating fragile, fine, or thinning hair.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Leaves hair looking fuller and thicker.</li>
                                            <li className="list-disc">Massage into scalp to exfoliate and stimulate circulation.</li>
                                            <li className="list-disc">Infused with a blend of mulberry leaf and ginseng extracts, the Satinique™ Thickening formula helps create fuller-looking hair while reducing breakage of fragile, fine, or thinning hair.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>After shampooing, apply conditioner and distribute throughout hair. Rinse.</p>
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
