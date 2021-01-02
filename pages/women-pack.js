import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function women_pack() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/womenpack.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Women’s Pack</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A Foundational nutrition designed for women
                                        Nourish your body from the inside out with better daily nutrition to help you look and feel your best.
Each packet contains:</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Nutrilite™ Daily: Provides 24 essential vitamins and minerals to help fill your nutrient gaps.</li>
                                            <li className="list-disc">Nutrilite™ Concentrated Fruits and Vegetables: Provides plant nutrients equal to 5+ servings of fruits and vegetables.</li>
                                            <li className="list-disc">Nutrilite™ Cal Mag D: Helps build strong bones with calcium, magnesium and vitamin D</li>
                                            <li className="list-disc">Nutrilite™ Hair, Skin &amp; Nail Health: Contains biotin and collagen to promote strong, flexible nails, support healthy hair and smooth, elastic skin</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 12 years of age, pregnant women or nursing mothers, or anyone with a medical condition should consult a physician before using this product. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Take contents of one packet daily, preferably with a meal.</p>
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
