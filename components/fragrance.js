import { lazy } from 'react'

const Dry_Oil_Spray = lazy(() => import('../pages/studio-multi-purpose-dry-oil-spray'))
const Defend_Spray = lazy(() => import('../pages/dual-defend-spray'))
const Roll_On = lazy(() => import('../pages/protect-plus-deodorant-roll-on'))
const Unknown_Parfum_Spray = lazy(() => import('../pages/men-unknown-spray'))
const Refresher_Spray = lazy(() => import('../pages/refresher-spray'))
const Chic_Spray = lazy(() => import('../pages/flora-chic-spray'))

const details = [
    {
        title: "Artistry Studio Multi-Purpose Dry Oil Spray",
        id: "Artistry Studio Multi-Purpose Dry Oil Spray",
        price: "22.30",
        image: "/images/artistry-studio-multi-purpose-dry-oil-spray.jpg",
        path: '/studio-multi-purpose-dry-oil-spray',
        component: Dry_Oil_Spray,
    },
    {
        title: "Satinique Dual Defend Spray",
        id: "Satinique Dual Defend Spray",
        price: "15.80",
        image: "/images/satinique-dual-defend-spray.jpg",
        path: '/dual-defend-spray',
        component: Defend_Spray,
    },
    {
        title: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
        id: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
        price: "7.00",
        image: "/images/G&H-protect+-deodorant-roll-on.jpg",
        path: '/protect-plus-deodorant-roll-on',
        component: Roll_On,
    },
    {
        title: "Artistry Men Unknown Eau de Parfum Spray",
        id: "Artistry Men Unknown Eau de Parfum Spray",
        price: "63.00",
        image: "/images/artistry-men-unknown-spray.jpg",
        path: '/men-unknown-spray',
        component: Unknown_Parfum_Spray,
    },
    {
        title: "Glister™ Refresher Spray",
        id: "Glister Refresher Spray",
        price: "5.15",
        image: "/images/refresher-spray.jpg",
        path: '/refresher-spray',
        component: Refresher_Spray,
    },
    {
        title: "Artistry Flora Chic Eau de Parfum Spray",
        id: "Artistry Flora Chic Eau de Parfum Spray",
        price: "70.00",
        image: "/images/artistry-flora-chic-spray.jpg",
        path: '/flora-chic-spray',
        component: Chic_Spray,
    }
]

export default function fragrance() {
    return (
        <div>
            <main>
                <div className="uppercase text-2xl font-semibold text-center pt-2">Fragrance</div>
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