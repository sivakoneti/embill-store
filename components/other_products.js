import { lazy } from 'react'

const Other_Products_drink = lazy(() => import('../pages/energy-drink-pallet'))
const Other_Products_sanitizer = lazy(() => import('../pages/protect-plus-hand-sanitizer'))

const details = [
    {
        title: "XS™ Energy Drink - Cranberry-Grape",
        id: "XS™ Energy Drink - Cranberry-Grape",
        price: "22.60",
        image: "/images/energydrinkpallet.jpg",
        path: '/energy-drink-pallet',
        component: Other_Products_drink,
    },
    {
        title: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
        id: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
        price: "10.00",
        image: "/images/G&H-protect+-hand-sanitizer.jpg",
        path: '/protect-plus-hand-sanitizer',
        component: Other_Products_sanitizer,
    }
]

export default function other_products() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Energy Drink and Hand Sanitizer</div>
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