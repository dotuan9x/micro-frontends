import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import {Provider, useSelector, useDispatch } from 'react-redux';

import {store as RelatedStore} from "./store";
import reducer, {updateProductId} from './reducer';

// Styles
import 'tailwindcss/tailwind.css';

function App(props) {
    const { store = RelatedStore } = props;

    useEffect(() => {
        store.injectReducer('relatedReducer', reducer);
    }, [])

    return (
        <HashRouter>
            <Provider store={store || {}}>
                <RelatedProduct />
            </Provider>
        </HashRouter>
    );
}

const RelatedProduct = () => {
    const dispatch = useDispatch();

    const productId = useSelector((state) => state.productsReducer.productId);
    const products = useSelector((state) => {
        const product = state.productsReducer.products.find(product => product.id === productId);

        return state.productsReducer.products.filter(prod => product.related.indexOf(prod.id) >= 0)
    });

    return (
        <div className="border-l border-gray-100 p-5">
            <h1 className="text-base font-medium">Related products</h1>
            <ul className="flex flex-col">
                {
                    products.map((product) => {
                        return (
                            <li key={product.id} className="cursor-pointer opacity-100 hover:opacity-80">
                                <img className="w-36" onClick={() => dispatch(updateProductId(product.id))} alt="" src={product.image} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

App.propTypes = {
    children: PropTypes.Any
};

export default App;
