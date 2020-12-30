import products from '../products.json';
export default function Store() {
    return (
        <div>
            <main className="md:grid md:grid-cols-2">
                {products.map(product => {
                    return (
                        <div key={product.id} className="sm:flex rounded-md border border-gray-200 m-4">
                            <div className="flex-none sm:w-64">
                                <img src={product.image} alt={product.title} className="w-full h-full object-center object-contain" />
                            </div>
                            <div className="flex-auto p-6">
                                <div className="flex flex-wrap">
                                    <h1 className="flex-auto text-xl font-semibold">
                                        {product.title}
                                    </h1>
                                    <div className="text-xl font-semibold">
                                        ${product.price}
                                    </div>
                                    <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                                        In stock
                                    </div>
                                </div>
                                <div className="flex items-baseline mt-4 mb-6">
                                    <p>{product.description}</p>
                                </div>
                                <div className="flex space-x-3 mb-4 text-sm font-medium">
                                    <div className="flex-auto flex space-x-4">
                                        <button className="w-1/2 h-9 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
                                        <button className="w-1/2  h-9 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </main>
        </div>
    )
}
