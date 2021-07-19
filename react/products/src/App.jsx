import React from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';

const RelatedProducts = React.lazy(() => import('RelatedProducts/Products'));

// Styles
import 'tailwindcss/tailwind.css';

function App({children}) {
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
    const remoteAppScope = 'remoteApp';
    const state = useSelector((state) => state[remoteAppScope]);

    console.log('Products state', state)

    return (
        <div className="container flex flex-row m-10 border border-gray-100">
            <div className="flex flex-col w-full p-5">
                <div className="flex flex-row w-full justify-between">
                    <h1>{state && state.appName ? state.appName : ''}</h1>
                    <div>Orders: 3 items</div>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red.jpg" />
                    </div>
                    <div className="w-1/3 pt-10">
                        <label className="">Tractor Porsche-Diesel Master 419</label>
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
            <RelatedProducts store={store} />
        </div>
    )
}

App.propTypes = {
    children: PropTypes.Any
};

export default App;
