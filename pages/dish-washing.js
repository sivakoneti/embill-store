import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function Dish_Wash() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/dishwashing.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Dish Drops™ Dishwashing Liquid - Original Scent</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">When your dishes are covered with hard-to-get-off grease and gunk, use a drop or two of Amway Home™ Dish Drops™ Dishwashing Liquid. Plates and cups will get cleaner, sooner, so you can get back to doing everything else on your to-do list.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Contains aloe vera and shiso extract to help keep your hands from drying out.</li>
                                            <li className="list-disc">The 1 L bottle cleans over 330 sinks full of dishes! Now that's a great value.</li>
                                            <li className="list-disc">Recognized by the U.S. Environmental Protection Agency’s (EPA) Safer Choice Program for containing safer ingredients that don’t sacrifice quality or performance.</li>
                                            <li className="list-disc">Biodegradable formula.</li>
                                            <li className="list-disc">No phosphates, chlorine or other unpleasant ingredients, so it’s safer for the environment.</li>
                                            <li className="list-disc">Concentrated, so less is more.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>May irritate eyes and skin. Do not get in eyes, or on skin or clothing. Keep out of reach of children.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Add 3 ml to sink. For more convenient dosing, use 1 - 2 pumps from the available dispenser bottle.</p>
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
