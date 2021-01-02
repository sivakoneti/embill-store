import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'
export default function All_Fabric_Bleach() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/all-fabric-bleach.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Amway Home™ All Fabric Bleach</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Chlorine-free bleach produces whiter whites and is safe on colors</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Uses the power of oxygen to remove wine, juice and other tough stains, leaving clothes white and bright!</li>
                                            <li className="list-disc">Made with powerful ingredients to get out some of the worst stains.</li>
                                            <li className="list-disc">Recognized by the U.S. Environmental Protection Agency’s (EPA) Safer Choice Program for containing safer ingredients that don’t sacrifice quality or performance.</li>
                                            <li className="list-disc">Safe and effective in all washers, including HE (High Efficiency) machines.</li>
                                            <li className="list-disc">Biodegradable formula.</li>
                                            <li className="list-disc">No phosphates, chlorine or other unpleasant ingredients, so it’s safer for the environment.</li>
                                            <li className="list-disc">Concentrated, so less is more.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Contains sodium percarbonate. Avoid contact with eyes and prolonged contact with skin. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Add 1 scoop (30 mL) with your detergent to each load.

                                        Do not use on wool or silk, or with chlorine bleach.

To presoak: Dissolve one scoop (30 mL) per load and soak 30 minutes or longer, then wash as normal.</p>
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