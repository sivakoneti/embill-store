import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function complexion_bar() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-protect+-nourish+-complexion-bar.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Nourish+™ Complexion Bar</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A glycerin soap that will improve complexion, leaving your skin soft and nourished.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Non-drying formula with skin-softening moisturizers leaves skin feeling conditioned and smooth.</li>
                                            <li className="list-disc">Maintains skin's natural moisture balance.</li>
                                            <li className="list-disc">Rich, creamy lather rinses clean without residue on skin.</li>
                                            <li className="list-disc">Suitable for all skin types, including sensitive.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Wet the bar, then massage in hands to create lather. Massage lather over skin. Rinse off.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    )
}
