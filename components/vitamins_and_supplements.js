import { lazy } from 'react'
import Link from 'next/link'

const Twist = lazy(() => import('../pages/twist'))
const Women_Pack = lazy(() => import('../pages/women-pack'))
const Immunity_Pack = lazy(() => import('../pages/immunity-pack'))
const Vitamin_C = lazy(() => import('../pages/vitamin-c'))
const Men_Pack = lazy(() => import('../pages/men-pack'))
const Defense_Zinc = lazy(() => import('../pages/defense-zinc'))
const Vitamin_D = lazy(() => import('../pages/vitamin-d'))
const Immunity_Gummies = lazy(() => import('../pages/immunity-gummies'))
const Antioxidant_Health = lazy(() => import('../pages/antioxidant-health'))

const details = [
    {
        title: "Nutrilite™ Twist Tubes 2GO™ – Immunity Health - Strawberry Kiwi",
        id: "Nutrilite Twist Tubes 2GO – Immunity Health - Strawberry Kiwi",
        price: "15.00",
        image: "/images/twist.jpg",
        path: '/twist',
        component: Twist,
    },
    {
        title: "Nutrilite™ Women’s Pack",
        id: "Nutrilite™ Women’s Pack",
        price: "38.00",
        image: "/images/womenpack.jpg",
        path: '/women-pack',
        component: Women_Pack,
    },
    {
        title: "Nutrilite™ Immunity Pack",
        id: "Nutrilite Immunity Pack",
        price: "17.50",
        image: "/images/immunity.jpg",
        path: '/immunity-pack',
        component: Immunity_Pack,
    },
    {
        title: "Nutrilite™ Vitamin C Extended Release - 60 Tablets",
        id: "Nutrilite Vitamin C - 60 Tablets",
        price: "22.60",
        image: "/images/vitamin-c.jpg",
        path: '/vitamin-c',
        component: Vitamin_C,
    },
    {
        title: "Nutrilite™ Men’s Pack",
        id: "Nutrilite Men’s Pack",
        price: "38.00",
        image: "/images/menpack.jpg",
        path: '/men-pack',
        component: Men_Pack,
    },
    {
        title: "Nutrilite™ Immunity Defense Zinc + Holy Basil",
        id: "Nutrilite Immunity Defense Zinc",
        price: "16.20",
        image: "/images/defense-zinc.jpg",
        path: '/defense-zinc',
        component: Defense_Zinc,
    },
    {
        title: "Nutrilite™ Vitamin D",
        id: "Nutrilite Vitamin D",
        price: "27.80",
        image: "/images/vitamin-d.jpg",
        path: '/vitamin-d',
        component: Vitamin_D,
    },
    {
        title: "Nutrilite™ Go Shield – Immunity Gummies",
        id: "Nutrilite Go Shield – Immunity Gummies",
        price: "16.20",
        image: "/images/immunity-gummies.jpg",
        path: '/immunity-gummies',
        component: Immunity_Gummies,
    },
    {
        title: "Nutrilite™ Twist Tubes 2GO Antioxidant Health – Mango Citrus",
        id: "Nutrilite Twist Tubes 2GO Antioxidant Health – Mango Citrus",
        price: "22.30",
        image: "/images/antioxidant-health.jpg",
        path: '/antioxidant-health',
        component: Antioxidant_Health,
    }
]

export default function vitamins_and_supplements() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Vitamins and Supplements</div>
                <div className="md:grid md:grid-cols-2">
                    {details.map(Product => {
                        return (
                            <div key={Product.id} className="sm:flex rounded-md border border-gray-200 m-4">
                                <div className="flex-none sm:w-64 relative ">
                                    <img src={Product.image} alt={Product.title} className="w-full h-full object-center object-contain" />
                                </div>
                                <div className="flex-auto p-6">
                                    <div className="flex flex-wrap">
                                        <Link href={Product.path}>
                                            <h1 className="flex-auto text-xl font-semibold">
                                                {Product.title}
                                            </h1>
                                        </Link>
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