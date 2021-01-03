import { lazy } from 'react'
import Link from 'next/link'

const Oral_Rinse = lazy(() => import('../pages/oral-rinse'))
const Toothpaste_Small = lazy(() => import('../pages/toothpaste-small'))
const Toothpaste_Travel = lazy(() => import('../pages/toothpaste-travel-size'))

const details = [
    {
        title: "Glister™ Multi-Action Oral Rinse",
        id: "Glister Multi-Action Oral Rinse",
        price: "9.25",
        image: "/images/oral-rinse.jpg",
        path: '/oral-rinse',
        component: Oral_Rinse,
    },
    {
        title: "Glister™ Multi-Action Fluoride Toothpaste",
        id: "Glister Fluoride Toothpaste",
        price: "4.00",
        image: "/images/toothpaste-small.jpg",
        path: '/toothpaste-small',
        component: Toothpaste_Small,
    },
    {
        title: "Glister™ Multi-Action Fluoride Toothpaste – Travel Size",
        id: "Glister Multi-Action Fluoride Toothpaste – Travel Size",
        price: "6.00",
        image: "/images/toothpaste.jpg",
        path: '/toothpaste-travel-size',
        component: Toothpaste_Travel,
    }
]

export default function oral_care() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Oral Care</div>
                <div className="md:grid md:grid-cols-2">
                    {details.map(Product => {
                        return (
                            <div key={Product.id} className="sm:flex rounded-md border border-gray-200 m-4">
                                <div className="flex-none sm:w-64 relative ">
                                    <img src={Product.image} alt={Product.title} className="w-full h-full object-center object-contain" />
                                </div>
                                <div className="flex-auto p-6">
                                    <div className="flex flex-wrap">
                                        <a href={Product.path}>
                                            <h1 className="flex-auto text-xl font-semibold">
                                                {Product.title}
                                            </h1>
                                        </a>
                                        <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                                            In stock
                                    </div>
                                        <div className="text-xl font-semibold mt-2">
                                            ${Product.price}
                                        </div>
                                    </div>
                                    <div className="flex space-x-3 mb-4 text-sm font-medium mt-4">
                                        <div className="flex-auto flex space-x-4">
                                            <button className="snipcart-add-item snipcart-checkout w-1/2 h-9 flex items-center justify-center rounded-md bg-black text-white" type="submit"
                                                data-item-id={Product.id}
                                                data-item-price={Product.price}
                                                    data-item-url="/"
                                                data-item-image={Product.image}
                                                data-item-name={Product.title}>
                                                Buy now
                                        </button>
                                            <button className="snipcart-add-item w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button"
                                                data-item-id={Product.id}
                                                data-item-price={Product.price}
                                                    data-item-url="/"
                                                data-item-image={Product.image}
                                                data-item-name={Product.title}>
                                                Add to bag
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    )
}