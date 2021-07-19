import React from 'react';
import {HashRouter} from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

const RelatedProducts = React.lazy(() => import('RelatedProducts/Products'));

// Styles
import 'tailwindcss/tailwind.css';

function App() {
    return (
        <HashRouter>
            <React.Suspense fallback={null}>
                <Provider store={store}>
                    <Products />
                </Provider>
            </React.Suspense>
        </HashRouter>
    );
}

const Products = () => {
    const productId = useSelector((state) => state.productsReducer.productId);
    const relatedProductId = useSelector((state) => {
        return state && state.relatedReducer && state.relatedReducer.productId ? state.relatedReducer.productId : null
    });
    const products = useSelector((state) => state.productsReducer.products);
    const product = products.find(product => product.id === (relatedProductId || productId));

    return (
        <div className="container flex flex-row m-10 border border-gray-100">
            <div className="flex flex-col w-full p-5">
                <div className="flex flex-row w-full justify-between">
                    <h1 className="text-lg font-bold">The Model Store</h1>
                    <div>Orders: 0 items</div>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <img alt="" src={product.image} />
                    </div>
                    <div className="w-1/3 pt-10">
                        <label className="text-lg font-medium">{product.title}</label>
                        <ul className="flex flex-row mt-10">
                            <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red-thumb.jpg" />
                            </li>
                            <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green-thumb.jpg" />
                            </li>
                            <li className="cursor-pointer border-b-2 border-white hover:border-gray-300">
                                <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue-thumb.jpg" />
                            </li>
                        </ul>
                        <button className="font-medium hover:bg-gray-50 border border-gray-300 rounded p-3 mt-10">Buy for 66,00 $</button>
                    </div>
                </div>
            </div>
            <RelatedProducts store={store} />
        </div>
    )
}

export default App;
