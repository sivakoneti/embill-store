import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function Beauty_balm() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-exact-fit-beauty-balm-perfecting-primer.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Exact Fit Beauty Balm Perfecting Primer</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Artistry™ makeup primer with SPF 35 harnesses the power of three benefits in one: it primes, perfects, and hydrates. When used under foundation, makeup glides on more easily, blends effortlessly, and lasts longer.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Skin-transforming Elasto-Network primes skin and instantly improves skin texture.</li>
                                            <li className="list-disc">Tahitian pearls and optical prisms blur the appearance of pores and imperfections.</li>
                                            <li className="list-disc">A targeted liposome delivery system hydrates skin with encapsulated fresh Norwegian Fjord Water.</li>
                                            <li className="list-disc">Oil-free formula.</li>
                                            <li className="list-disc">Ultra-sheer and suitable for all skin types and tones.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply to entire face after completing your Artistry™ skincare regimen. When worn alone, this product provides skin-priming benefits with minimal or ultra-sheer coverage.</p>
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
