import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function repair_conditioner_750mL() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/satinique-color-repair-conditioner-750mL.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Satinique Color Repair Conditioner - 750mL</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Strengthen hair by up to nine times with this exclusive conditioner for damaged hair.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Helps mend and prevent split ends.</li>
                                            <li className="list-disc">Infused with a blend of pomegranate and grape seed extracts, the Satinique™ Color Repair formula helps revitalize dull, dry hair and enhances protection from environmental stress.</li>
                                            </ul>
                                        <label className="text-2xl">Use Instruction</label>
                                        <p>After shampooing, apply conditioner and distribute throughout hair. Rinse.</p>
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
