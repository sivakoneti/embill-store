import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function shave_balm() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-soothe+-for-men-after-shave-balm.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Soothe+ For Men After Shave Balm</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">G&amp;H Soothe+ For Men After Shave Balm transforms the morning shave into a calming ritual. The special blend of Aloe Vera and vitamin E helps soothe and moisturize after shaving, helping to reduce razor burn.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Moisturizing, non-greasy formula.</li>
                                            <li className="list-disc">Aloe vera extract, vitamin E and Allantoin calm and moisturize the skin.</li>
                                            <li className="list-disc">Dermatologist tested.</li>
                                            <li className="list-disc">Suitable for sensitive skin.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 8 years of age, pregnant women and nursing mothers, or anyone with a medical condition should consult with a physician before taking this product. Keep out of reach of children. Do not consume without mixing in water.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Apply to clean, dry face after shaving. Massage into skin.</p>
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
