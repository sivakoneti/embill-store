import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function energy_drink() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/energydrinkpallet.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">XS™ Energy Drink - Cranberry-Grape</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Bursting with a delicious, refreshing cranberry-grape taste, this XS™ Energy Drink is packed with just the right amount of caffeine and B vitamins, yet it doesn’t contain the level of sugar and carbs found in other popular energy drinks.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Made with a blend of premium ingredients, herbs and B vitamins.</li>
                                            <li className="list-disc">Only 10 calories per can.</li>
                                            <li className="list-disc">80 mg of caffeine per can, comparable to a small cup of coffee.</li>
                                            <li className="list-disc">No carbs and sugar-free.</li>
                                        </ul>
                                        <label className="text-2xl">Advisories</label>
                                        <p>Contains 80 mg of caffeine per serving. Not recommended for children, pregnant or nursing women, and those sensitive to caffeine. If you have additional questions, please consult with your physician.</p>
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
