import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function oral_rinse() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/oral-rinse.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Glister™ Multi-Action Oral Rinse</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Freshen your breath, significantly reduce plaque, and kill the bacteria that cause bad breath with each mouthful of this minty fresh oral rinse.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Concentrated for extra value and effectiveness.</li>
                                            <li className="list-disc">Each bottle provides 100 uses.</li>
                                            <li className="list-disc">Includes pump dispenser and measuring cup.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Keep out of reach of children. Do not use for children under 6 years of age. In case of accidental ingestion, seek professional assistance or contact a Poison Control Center immediately.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Pump five squirts of concentrate into cup provided and fill to the one ounce line with water. Rinse mouth for 30 seconds twice a day, once in the morning and again in the evening.</p>
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
