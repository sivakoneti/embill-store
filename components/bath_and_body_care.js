import { lazy } from 'react'
import Link from 'next/link'

const Body_Wash = lazy(() => import('../pages/body-wash'))
const Complexion_Bar = lazy(() => import('../pages/nourish-plus-complex-bar'))
const Shave_Balm = lazy(() => import('../pages/men-after-shave-balm'))
const Shave_Gel = lazy(() => import('../pages/men-foaming-shave-gel'))

const details = [
    {
        title: "G&H Nourish+™ Body Wash",
        id: "G&H Nourish+ Body Wash",
        price: "9.75",
        image: "/images/bodywash.jpg",
        path: '/body-wash',
        component: Body_Wash,
    },
    {
        title: "G&H Nourish+ Complexion Bar",
        id: "G&H Nourish+ Complexion Bar",
        price: "8.00",
        image: "/images/G&H-protect+-nourish+-complexion-bar.jpg",
        path: '/nourish-plus-complex-bar',
        component: Complexion_Bar,
    },
    {
        title: "G&H Soothe+ For Men After Shave Balm",
        id: "G&H Soothe+ For Men After Shave Balm",
        price: "13.25",
        image: "/images/G&H-soothe+-for-men-after-shave-balm.jpg",
        path: '/men-after-shave-balm',
        component: Shave_Balm,
    },
    {
        title: "G&H Soothe+ For Men Foaming Shave Gel",
        id: "G&H Soothe+ For Men Foaming Shave Gel",
        price: "11.50",
        image: "/images/G&H-soothe+-for-men-foaming-shave-gel.jpg",
        path: '/men-foaming-shave-gel',
        component: Shave_Gel,
    }
]


export default function bath_and_body_care() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Bath And Body Products</div>
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