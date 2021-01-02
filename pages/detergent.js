import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function detergent() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/detergent.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Amway Home™ SA8™ Liquid Laundry Detergent</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Conquer your laundry days with SA8™ Liquid Laundry Detergent. Its stain-fighting formula and beautiful floral scent work hard to leave your clothes clean and naturally soft. The triple-action concentrated formula helps you use less detergent and contains ingredients that won’t harm your laundry and are safer for the earth.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Works hard to leave your clothes clean and naturally soft.</li>
                                            <li className="list-disc">Recognized by the U.S. Environmental Protection Agency’s (EPA) Safer Choice Program for containing safer ingredients that don’t sacrifice quality or performance.</li>
                                            <li className="list-disc">Rinses clean in all water temperatures, even in cold water.</li>
                                            <li className="list-disc">Safe and effective in all washers, even HE (high efficiency).</li>
                                            <li className="list-disc">Biodegradable formula.</li>
                                            <li className="list-disc">No phosphates, chlorine or other unpleasant ingredients, so it’s safer for the environment.</li>
                                            <li className="list-disc">Concentrated, so less is more.</li>
                                            <li className="list-disc">Dermatologist and allergy tested.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>May irritate eyes and skin. Do not get in eyes, or on skin or clothing. Keep out of reach of children. Keep away from flames or sparks.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Add 2/3 cap (30 ml) to each load.</p>
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
