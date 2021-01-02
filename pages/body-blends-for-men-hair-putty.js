import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

export default function men_hair_putty() {
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
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/body-blends-for-men-hair-putty.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Body Blends For Men Hair Putty - Xtreme Live On The Edge</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Designed with a powerful and firm holding technology, the ability to create and control any hairstyle is at your fingertips.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc">Niacin formulated to boost circulation and enhance hair and scalp.</li>
                                            <li className="list-disc">Soft and nonsticky for easy application.</li>
                                        </ul>
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
