import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function immunity_pack() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/immunity.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Immunity Pack</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Support your immunity and protect your natural defenses so you can be your best and conquer your day.† This MyPack is an easy and convenient way to support your immune system.
The perfect blend of nature and science, both supplements are made from plants grown on our certified organic farms.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Nutrilite™ Vitamin C Extended Release: Provides 500 mg of vitamin C over an 8-hour period for all-day immune support.</li>
                                            <li className="list-disc">Nutrilite™ Immunity Echinacea: Provides strong, botanical support for your body’s natural defenses.</li>
                                            <li className="list-disc">No artificial colors, flavors, or preservatives.</li>
                                            <li className="list-disc">Strawberry-Kiwi flavored.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 12 years of age, pregnant women or nursing mothers, or anyone with a medical condition should consult with a physician before using this product. Keep out of reach of children. No artificial colors or preservatives added.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Take contents of one packet, preferably with a meal. Take up to two times per day, as needed. Daily use beyond two consecutive weeks is not recommended.</p>
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
