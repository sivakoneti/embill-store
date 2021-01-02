import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function Pressed_powder() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-exact-fit-pressed-powder.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Exact Fit Pressed Powder</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Silky smooth, pressed powder formula that mimics the look of real skin, using a single, seamless universal shade.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Silky smooth, pressed powder formula that mimics the look of real skin, using a single, seamless universal shade.</li>
                                            <li className="list-disc">Matte finish helps prevent shine anytime, anywhere.</li>
                                            <li className="list-disc">Fits perfectly into the Artistry Exact Fit™ Compact (116745), sold separately.</li>
                                            <li className="list-disc">Suitable for all skin types.</li>
                                            <li className="list-disc">Non-comedogenic.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                            <li className="list-disc">Approved for sensitive skin.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Sweep brush or applicator sponge over the compact and apply:

                                        Across the forehead.

                                        Down the top and sides of nose.

                                        Across the cheek toward the ear.

                                        Around the lips.

                                        Onto the chin and blend away at the jawline.

                                        Finish with a very light application to the eyelids.

                                        Repeat process if a more matte look is desired.

If a more luminous look to the skin is desired, sweep powder down the center of face only, which will leave a soft glow along the cheekbones and outer edges of face.</p>
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
