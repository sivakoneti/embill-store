import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function Floral_chic_spray() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-flora-chic-spray.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Flora Chic Eau de Parfum Spray</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Created by the fine fragrance house of Givaudan in Paris, this exclusive eau de parfum is an easily wearable floral with a high concentration of perfume oils that give a luxurious fragrance impression. It’s an ode to modern femininity, destined to become a classic.
Inspired by Parc de Bagatelle, a historic French garden, Artistry Flora Chic™ Eau de Parfum is an exquisite composition of these three primary ingredients:</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Top Note – French Clementine, a sparkling citrus with hints of mandarin floral and sweet orange freshness.</li>
                                            <li className="list-disc">Middle Note – Bulgarian Rose, the heart of the fragrance, at once soft and deep, sensual and sweet.</li>
                                            <li className="list-disc">Base Note – Ylang Ylang Madagascar, a modern, fresh, green floral with overtones of fruit and spice.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Spritz your Artistry Flora Chic™ Eau de Parfum onto your skin at one or two pulse points - do not rub the fragrance, let it dry (behind the ears, nape of the neck, the collarbone, inside the wrist, elbows, or knees), where your body's heat will release the scent.</p>
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
