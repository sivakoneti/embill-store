import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function scouring_pads() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/scouring-pads.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Amway Home™ Scrub Buds™ Scouring Pads</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Long-lasting, rust-free
The good things in life are made to last. That’s why Amway Home™ Scrub Buds™ Scouring Pads are so handy. They’re tough on messes, but gentle on everything else. Clean with confidence, without the rust.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Made from high-grade stainless steel, so they won't rust or fall apart.</li>
                                            <li className="list-disc">Dishwasher safe.</li>
                                            <li className="list-disc">Gentle on hands.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Scrub casserole dishes, ceramic pots and stainless steel cookware clean. Also great for tools. Do not use on mirror-finish surfaces.

                                        Cleaning Tip:

Store your Scrub Buds™ pads in the upper level of your dishwasher. Run the pads through the dishwasher to help kill bacteria. Keep them handy on the shelf whenever you need them for scrubbing.</p>
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
