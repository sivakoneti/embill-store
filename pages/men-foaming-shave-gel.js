import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function shave_gel() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/G&H-soothe+-for-men-foaming-shave-gel.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Soothe+ For Men Foaming Shave Gel</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">The special blend of chamomile, aloe and vitamin E in G&amp;H Soothe+ For Men Foaming Shave Gel softens beard hair for an easy shave from start to finish. Gel formula transforms into a rich foam to condition skin.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Rich foaming texture increases razor glide.</li>
                                            <li className="list-disc">Licorice Root extract helps soothe the skin.</li>
                                            <li className="list-disc">Dermatologist tested.</li>
                                            <li className="list-disc">Suitable for sensitive skin.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Avoid spraying in eyes. Contents under pressure. Do not place in hot water or near radiators, stoves or other sources of heat. Do not puncture or incinerate container (even when empty) or store at temperatures over 50º C/120º F. Extremely flammable: Do not use in the presence of open flame, sparks or while smoking. Use only as directed. Intentional misuse by deliberately concentrating and inhaling the contents can be harmful or fatal. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Wash face and keep wet. Hold can up, spray the gel onto hands, lather and spread over face. Rinse face after shaving. Follow with G&amp;H Soothe+ After Shave Balm to help calm skin and protect against irritation after shaving.</p>
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
