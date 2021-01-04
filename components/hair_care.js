import { lazy } from 'react'

const Men_Hair_Putty = lazy(() => import('../pages/body-blends-for-men-hair-putty'))
const Shampoo_and_Conditioner_280mL = lazy(() => import('../pages/two-in-one-shampoo-and-conditioner-280mL'))
const Anti_Hairfall_Conditioner_280mL = lazy(() => import('../pages/anti-hairfall-conditioner-280mL'))
const Color_Repair_Conditioner_750mL = lazy(() => import('../pages/color-repair-conditioner-750mL'))
const Color_Repair_Shampoo_280mL = lazy(() => import('../pages/color-repair-shampoo-280mL'))
const Color_Repair_Shampoo_750mL = lazy(() => import('../pages/color-repair-shampoo-750mL'))
const Anti_Hairfall_Shampoo_280mL = lazy(() => import('../pages/anti-hairfall-shampoo-280mL'))
const Shampoo_and_Conditioner_750mL = lazy(() => import('../pages/two-in-one-shampoo-and-conditioner-750mL'))
const Color_Repair_Conditioner_280mL = lazy(() => import('../pages/color-repair-conditioner-280mL'))

const details = [
    {
        title: "Body Blends For Men Hair Putty - Xtreme Live On The Edge",
        id: "Body Blends For Men Hair Putty - Xtreme Live On The Edge",
        price: "15.80",
        image: "/images/body-blends-for-men-hair-putty.jpg",
        path: '/body-blends-for-men-hair-putty',
        component: Men_Hair_Putty,
    },
    {
        title: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
        id: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
        price: "9.25",
        image: "/images/satinique-2-in-1-shampoo-and-conditioner-280mL.jpg",
        path: '/two-in-one-shampoo-and-conditioner-280mL',
        component: Shampoo_and_Conditioner_280mL,
    },
    {
        title: "Satinique Anti-Hairfall Conditioner - 280mL",
        id: "Satinique Anti-Hairfall Conditioner - 280mL",
        price: "9.75",
        image: "/images/satinique-anti-hairfall-conditioner-280mL.jpg",
        path: '/anti-hairfall-conditioner-280mL',
        component: Anti_Hairfall_Conditioner_280mL,
    },
    {
        title: "Satinique Color Repair Conditioner - 750mL",
        id: "Satinique Color Repair Conditioner - 750mL",
        price: "19.00",
        image: "/images/satinique-color-repair-conditioner-750mL.jpg",
        path: '/color-repair-conditioner-750mL',
        component: Color_Repair_Conditioner_750mL,
    },
    {
        title: "Satinique Color Repair Shampoo - 280mL",
        id: "Satinique Color Repair Shampoo - 280mL",
        price: "9.75",
        image: "/images/satinique-color-repair-shampoo-280mL.jpg",
        path: '/color-repair-shampoo-280mL',
        component: Color_Repair_Shampoo_280mL,
    },
    {
        title: "Satinique Color Repair Shampoo - 750mL",
        id: "Satinique Color Repair Shampoo - 750mL",
        price: "19.00",
        image: "/images/satinique-color-repair-shampoo-750mL.jpg",
        path: '/color-repair-shampoo-750mL',
        component: Color_Repair_Shampoo_750mL,
    },
    {
        title: "Satinique Anti-Hairfall Shampoo - 280mL",
        id: "Satinique Anti-Hairfall Shampoo - 280mL",
        price: "9.75",
        image: "/images/satinique-anti-hairfall-shampoo-280mL.jpg",
        path: '/anti-hairfall-shampoo-280mL',
        component: Anti_Hairfall_Shampoo_280mL,
    },
    {
        title: "Satinique 2 in 1 Shampoo and Conditioner - 750mL",
        id: "Satinique 2 in 1 Shampoo and Conditioner - 750mL",
        price: "18.75",
        image: "/images/satinique-2-in-1-shampoo-and-conditioner-750mL.jpg",
        path: '/two-in-one-shampoo-and-conditioner-750mL',
        component: Shampoo_and_Conditioner_750mL,
    },
    {
        title: "Satinique Color Repair Conditioner - 280mL",
        id: "Satinique Color Repair Conditioner - 280mL",
        price: "9.75",
        image: "/images/satinique-color-repair-conditioner-280mL.jpg",
        path: '/color-repair-conditioner-280mL',
        component: Color_Repair_Conditioner_280mL,
    }
]

export default function hair_care() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Hair Care Prodcuts</div>
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