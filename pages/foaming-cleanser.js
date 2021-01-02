import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function foam_cleanser() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/hydra-v-fresh-foaming-cleanser.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Hydra-V Fresh Foaming Cleanser</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">A gentle, soap-free, foaming gel cleanser that effectively removes excess oil, makeup, and dirt, leaving behind only comfortable, refreshed, healthy-looking skin.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Fresh, Norwegian fjord water leaves skin healthy-looking and refreshed.</li>
                                            <li className="list-disc">Oat Extract and a special conditioning agent self-adjusts for all skin types.</li>
                                            <li className="list-disc">Suitable for all skin types, including sensitive skin.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                            <li className="list-disc"> REFRESH - Pure Norwegian fjord water is encapsulated in our Artistry Hydra-V™ Liposome to release hydration deep into skin.</li>
                                            <li className="list-disc">REPLENISH - Nutrient-rich European Coastal Plant Extract replenishes by encouraging the movement and storage of water in skin.</li>
                                            <li className="list-disc">REVITALIZE - Hawaiian acai berries, combined with our Moisturizing Liposome, deliver lasting hydration for up to 24 hours.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Dampen your skin with warm water. Apply a pea-size drop of cleanser to your fingertips or a cleansing brush. Massage into face and neck in a circular motion until you reach a thick lather, avoiding contact with your eyes. Rinse thoroughly with warm water and pat face dry with a towel. For maximum benefits, use in the morning and evening.</p>
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