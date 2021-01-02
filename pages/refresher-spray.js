import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function refresher_spray() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/refresher-spray.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Glister™ Refresher Spray</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Enjoy a minty clean, cool, tingly feeling with one quick spray. Sugar-free and calorie-free.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Freshens breath instantly, anywhere.</li>
                                            <li className="list-disc">Long-lasting.</li>
                                            <li className="list-disc">Convenient non-aerosol dispenser fits in your pocket or purse.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Contents under pressure. Do not puncture or incinerate container. Do not store at temperatures over 50°C/120°F. Avoid spraying in eyes; if this happens, rinse eyes with water. Keep out of reach of children except under adult supervision.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Hold upright and spray directly into mouth.</p>
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