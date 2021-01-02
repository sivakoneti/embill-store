import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function fit_compact() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-exact-fit-compact.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Exact Fit Compact</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Refillable cosmetic compact fits Artistry Exact Fit™ Powder Foundation and Pressed Powder</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Comes with an elegant velvet storage pouch to protect your compact on-the-go.</li>
                                            <li className="list-disc">Built-in mirror included.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>To open the Artistry Exact Fit™ Compact, gently press the lid up and away from the front of the base.</p>
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
