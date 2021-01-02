import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function dry_oil_spray() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-studio-multi-purpose-dry-oil-spray.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Studio Multi-Purpose Dry Oil Spray</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Specially formulated to give you vibrant-looking skin and beautifully shiny hair
Get glowing with an instant infusion of radiance with luxurious Artistry Studio™ Multi-Purpose Dry Oil Spray. We call this fine mist spray a "dry oil" because it absorbs quickly, with no slippery after-feel. You’ll love it!</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Use on your body to condition your skin and lock in moisture.</li>
                                            <li className="list-disc">Use on your hair to give added shine.</li>
                                        </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>Mist onto clean skin and gently massage until fully absorbed. Mist onto ends of hair.</p>
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
