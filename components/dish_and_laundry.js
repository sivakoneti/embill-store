import { lazy } from 'react'
import Link from 'next/link'

const Dish_Washing = lazy(() => import('../pages/dish-washing'))
const Detergent = lazy(() => import('../pages/detergent'))
const Fabric_Bleach = lazy(() => import('../pages/all-fabric-bleach'))
const Scouring_Pads = lazy(() => import('../pages/scouring-pads'))
const Dispenser_Bottle = lazy(() => import('../pages/dish-drops-dispenser-bottle'))

const details = [
    {
        title: "Dish Drops™ Dishwashing Liquid - Original Scent",
        id: "Dish Drops - Dishwashing Liquid",
        price: "14.25",
        image: "/images/dishwashing.jpg",
        path: '/dish-washing',
        component: Dish_Washing,
    },
    {
        title: "Liquid Laundry Detergent - Floral Scent - 4 L",
        id: "Liquid Laundry Detergent",
        price: "35.00",
        image: "/images/detergent.jpg",
        path: '/detergent',
        component: Detergent,
    },
    {
        title: "Amway Home™ All Fabric Bleach",
        id: "Amway Home All Fabric Bleach",
        price: "22.30",
        image: "/images/all-fabric-bleach.jpg",
        path: '/all-fabric-bleach',
        component: Fabric_Bleach,
    },
    {
        title: "Amway Home™ Scrub Buds™ Scouring Pads",
        id: "Amway Home Scrub Buds Scouring Pads",
        price: "4.50",
        image: "/images/scouring-pads.jpg",
        path: '/scouring-pads',
        component: Scouring_Pads,
    },
    {
        title: "Amway Home™ Dish Drops™ Dispenser Bottle",
        id: "Amway Home Dish Drops Dispenser Bottle",
        price: "5.50",
        image: "/images/dish-drops-dispenser-bottle.jpg",
        path: '/dish-drops-dispenser-bottle',
        component: Dispenser_Bottle,
    }
]

export default function dish_and_laundry() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Dish and Laundry Products</div>
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