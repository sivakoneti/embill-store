import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function vitamin_d() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/vitamin-d.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Nutrilite™ Vitamin D</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Life has moved indoors. Get your sunshine from the inside out with Nutrilite™ Vitamin D. Provides Vitamin D in an amount equivalent to 16 cups of fortified milk. You’ll also get vitamin K2, which helps get calcium from your bloodstream into your bones.† Nutrilite™ Vitamin D delivers high-potency vitamin D that:</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Promotes bone health.</li>
                                            <li className="list-disc">Supports teeth, heart health and immune system.</li>
                                            <li className="list-disc">Sourced from mushrooms – one of nature’s most concentrated botanical sources of vitamin D.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Children under 12 years of age, pregnant women or nursing mothers, or anyone with a medical condition should consult with a physician before taking this product. Keep out of reach of children. Patients on anticoagulant therapy should consult their physician before taking vitamin k2 supplements.</p>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Take one tablet a day, with or without a meal.</p>
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
