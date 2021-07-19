import React from 'react';
import {HashRouter} from 'react-router-dom';

const RelatedProducts = React.lazy(() => import('RelatedProducts/Products'));

// Styles
import 'tailwindcss/tailwind.css';

function App() {
    return (
        <HashRouter>
            <React.Suspense fallback={null}>
                <div className="container flex flex-row m-10 border border-gray-100 rounded">
                    <div className="flex flex-col w-full p-5">
                        <div className="flex flex-row w-full justify-between">
                            <h1 className="text-lg font-bold">The Model Store</h1>
                            <div>Orders: 0 items</div>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-2/3">
                                <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red.jpg" />
                            </div>
                            <div className="w-1/3 pt-10">
                                <label className="text-lg font-medium">Tractor Porsche-Diesel Master 419</label>
                                <ul className="flex flex-row">
                                    <li>
                                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red-thumb.jpg" />
                                    </li>
                                    <li>
                                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green-thumb.jpg" />
                                    </li>
                                    <li>
                                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue-thumb.jpg" />
                                    </li>
                                </ul>
                                <button className="border border-gray-100 rounded p-3">Buy for 66,00 $</button>
                            </div>
                        </div>
                    </div>
                    <RelatedProducts />
                </div>
            </React.Suspense>
        </HashRouter>
    );
}

export default App;
