import { lazy } from 'react'
import Link from 'next/link'

const Toner = lazy(() => import('../pages/fresh-toner'))
const Brush_Set = lazy(() => import('../pages/brush-set'))
const Sharpener = lazy(() => import('../pages/signature-pencil-sharpener'))
const Fit_Compact = lazy(() => import('../pages/exact-fit-compact'))
const Pressed_Powder = lazy(() => import('../pages/exact-fit-pressed-powder'))
const Foam_Cleanser = lazy(() => import('../pages/foaming-cleanser'))
const Bealty_Balm = lazy(() => import('../pages/exact-fit-beauty-balm-perfecting-primer'))

const details = [
    {
        title: "Artistry Hydra-V Fresh toner",
        id: "Artistry Hydra-V Fresh toner",
        price: "20.30",
        image: "/images/hydra-v-fresh-toner.jpg",
        path: '/fresh-toner',
        component: Toner,
    },
    {
        title: "Artistry Brush Set",
        id: "Artistry Brush Set",
        price: "62.60",
        image: "/images/artistry-brush-set.jpg",
        path: '/brush-set',
        component: Brush_Set,
    },
    {
        title: "Artistry Signature Color Eye Pencil Sharpener",
        id: "Artistry Signature Color Eye Pencil Sharpener",
        price: "3.50",
        image: "/images/artistry-signature-pencil-sharpener.jpg",
        path: '/signature-pencil-sharpener',
        component: Sharpener,
    },
    {
        title: "Artistry Exact Fit Compact",
        id: "Artistry Exact Fit Compact",
        price: "13.00",
        image: "/images/artistry-exact-fit-compact.jpg",
        path: '/exact-fit-compact',
        component: Fit_Compact,
    },
    {
        title: "Artistry Exact Fit Pressed Powder",
        id: "Artistry Exact Fit Pressed Powder",
        price: "18.70",
        image: "/images/artistry-exact-fit-pressed-powder.jpg",
        path: '/exact-fit-pressed-powder',
        component: Pressed_Powder,
    },
    {
        title: "Artistry Hydra-V Fresh Foaming Cleanser",
        id: "Artistry Hydra-V Fresh Foaming Cleanser",
        price: "20.30",
        image: "/images/hydra-v-fresh-foaming-cleanser.jpg",
        path: '/foaming-cleanser',
        component: Foam_Cleanser,
    },
    {
        title: "Artistry Exact Fit Beauty Balm Perfecting Primer",
        id: "Artistry Exact Fit Beauty Balm Perfecting Primer",
        price: "31.40",
        image: "/images/artistry-exact-fit-beauty-balm-perfecting-primer.jpg",
        path: '/exact-fit-beauty-balm-perfecting-primer',
        component: Bealty_Balm,
    }
]

export default function skin_and_make_up() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Skin and MakeUp Products</div>
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
                                                data-item-url={Product.path}
                                                data-item-image={Product.image}
                                                data-item-name={Product.title}>
                                                Buy now
                                        </button>
                                            <button className="snipcart-add-item w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button"
                                                data-item-id={Product.id}
                                                data-item-price={Product.price}
                                                data-item-url={Product.path}
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