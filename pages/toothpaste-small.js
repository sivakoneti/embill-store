import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function toothpaste_small() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/toothpaste-small.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Glister™ Multi-Action Fluoride Toothpaste</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A healthy clean you can see and feel with every smileOne fluoride toothpaste does it all for every member of the family.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Fights cavities and freshens breath.</li>
                                            <li className="list-disc">Whitens teeth and removes stains.</li>
                                            <li className="list-disc">Removes plaque with regular brushing.</li>
                                            <li className="list-disc">Promotes remineralization that, with regular brushing, helps to repair early cavities.</li>
                                            <li className="list-disc">Helps prevent demineralization, which can lead to tooth decay.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Keep out of the reach of children under 6 years of age. If you accidentally swallow more than used for brushing, seek medical help or contact a Poison Control Center right away. Do not use if seal on tube has been removed.</p>
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
