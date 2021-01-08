import Head from 'next/head'
import Navbar from '../components/nav'
import Footer from '../components/footer'

const details = {
    title: "Artistry Brush Set",
    id: "Artistry Brush Set",
    price: "62.60",
    image: "/images/artistry-brush-set.jpg"
}

export default function brush_Set() {
    return (
        <div className="">
            <Head>
                <title>Embill Store - Save Time, Save Money, Everyday!!!</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.css" />
            </Head>

            <main>
                <Navbar />
                <div className="my-8 mt-24">
                    <div className="container mx-auto px-6">
                        <div className="md:flex md:items-center">
                            <div className="w-full h-auto md:w-1/2">
                                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src="/images/artistry-brush-set.jpg" alt="Body Wash" />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="uppercase text-lg font-semibold">Artistry Brush Set</h3>
                                <div className="mt-2">
                                    <label className="text-2xl">Description</label>
                                    <div className="mt-1">
                                        <p className="text-lg mx-2">Line, define, blend and contour like a pro with these top-notch beauty tools. Perfect for effortless application of your Artistry™ makeup, this stylish set includes six matte black brushes in a sleek zipper case to carry these beauty essentials.</p>
                                        <ul className="pl-5">
                                            <li className="list-disc"><span className="font-bold">Foundation Brush:</span> Densely packed, angled synthetic fibers offer complete control for evenly applying and blending foundation on your face and neck.</li>
                                            <li className="list-disc"><span className="font-bold">Powder Brush:</span>With its finely milled synthetic fibers and flexible shape, this rounded and tapered brush gives a lightweight yet luxurious powder application on your face, neck and décolleté.</li>
                                            <li className="list-disc"><span className="font-bold">Highlight/Contour Brush:</span>With a wide and thin side, this multi-purpose brush lets you flawlessly contour the angles of your face and lightly highlight to create definition. The fan shape allows for delicate placement of color, too.</li>
                                            <li className="list-disc"><span className="font-bold">Concealer Brush:</span>Gentle synthetic fibers in a flat, rounded paddle shape offer precise application to diminish your imperfections, dark circles and uneven skin tone.</li>
                                            <li className="list-disc"><span className="font-bold">Eye Shadow Brush:</span>Dense, tapered synthetic bristles let you apply, layer, blend and smudge eye color to your lid and line areas.</li>
                                            <li className="list-disc"><span className="font-bold">Eye Liner/Brow Brush:</span>With its thin profile and angled structure, this brush makes for easy, accurate shadow and liner application. Soft fibers are gentle on the delicate eye area and angled bristles are perfect for brow shaping.</li>
                                        </ul>
                                        <div className="flex space-x-3 mb-4 text-sm font-medium mt-4">
                                            <div className="flex-auto flex space-x-4">
                                                <button className="snipcart-add-item snipcart-checkout w-1/2 h-9 flex items-center justify-center rounded-md bg-black text-white" type="submit"
                                                    data-item-id={details.id}
                                                    data-item-price={details.price}
                                                    data-item-url="/"
                                                    data-item-image={details.image}
                                                    data-item-name={details.title}>
                                                    Buy now
                                                </button>
                                                <button className="snipcart-add-item w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button"
                                                    data-item-id={details.id}
                                                    data-item-price={details.price}
                                                    data-item-url="/"
                                                    data-item-image={details.image}
                                                    data-item-name={details.title}>
                                                    Add to bag
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
            <script async src="https://cdn.snipcart.com/themes/v3.0.27/default/snipcart.js"></script>
            <div
                id="snipcart"
                data-config-add-product-behavior="none"
                data-config-modal-style="side"
                data-api-key="NGNhY2MzOTEtYzdiMS00ODk0LWI5NzMtNTgyMjFiZGFlZmVhNjM3MzYwNjg4OTAxNTYxMDAy"
                hidden>
            </div>
        </div>
    )
}
