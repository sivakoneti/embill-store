import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function men_pack() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/menpack.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Men’s Pack</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Convenient, daily supplements to help fill nutrient gaps. Four unique supplements to support a strong heart, clear mind and healthy immune system.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Nutrilite™ Daily: Provides 24 essential vitamins and minerals to help fill your nutrient gaps.</li>
                                            <li className="list-disc">Nutrilite™ Concentrated Fruits and Vegetables: Provides plant nutrients equal to 5+ servings of fruits and vegetables.</li>
                                            <li className="list-disc">Nutrilite™ Balanced Health Omega: Provides DHA and EPA omega-3s to support brain
and eye health.</li>
                                            <li className="list-disc">Nutrilite™ Vitamin C Extended Release: Provides 500 mg of vitamin C over an 8-hour period for all-day immunity support.</li>
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
