import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function Body_Wash() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/bodywash.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">G&amp;H Nourish+™ Body Wash</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A naturally inspired body wash that goes beyond cleansing to leave skin moisturized.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Great for dry skin, especially in dry climates or seasons.</li>
                                            <li className="list-disc">Creamy, pearlescent formula produces rich, creamy lather; rinses cleanly from skin.</li>
                                            <li className="list-disc">Formula contains patented anti-irritation complex to gently clean the skin.</li>
                                            <li className="list-disc">Helps improve skin’s moisture level; skin feels soft, smooth, and conditioned, and never feels dry after use.</li>
                                            <li className="list-disc">Dye-free, sulfate-free and wheat-free.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Dispense a pearl-sized amount of body wash into palm of one hand, or directly onto washcloth or sponge. Massage the body wash into a lather, then smooth over skin. Rinse, then towel dry.</p>
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
