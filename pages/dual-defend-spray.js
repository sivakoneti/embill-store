import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function defend_spray() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/satinique-dual-defend-spray.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Satinique Dual Defend Spray</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Get thermal and UV hair protection in this sheer spray that leaves hair hydrated, shiny, and up to nine times stronger.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Exclusive formula with special humectants, emollients, and sunscreens helps prevent dryness and brittleness.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Shake well.
Spray 8-12 inches from damp or dry hair. Leave in.</p>
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
