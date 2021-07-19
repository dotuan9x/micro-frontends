import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {HashRouter} from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';

import reducer, { changeAppNameAction } from './reducer';

const remoteAppScope = 'remoteApp';

import { store as RelatedStore } from './store';

// Styles
import 'tailwindcss/tailwind.css';

function App(props) {
    const { store = RelatedStore } = props;

    useEffect(() => {
        store.injectReducer(remoteAppScope, reducer);
    }, []);

    return (
        <HashRouter>
            <Provider store={store || {}}>
                <RelatedProduct />
            </Provider>
        </HashRouter>
    );
}

const RelatedProduct = () => {
    const state = useSelector((state) => state[remoteAppScope]);
    const dispatch = useDispatch();

    // console.log('state', state)

    return (
        <div className="border-l border-gray-100 p-5">
            <h1>Related products</h1>
            <ul className="flex flex-col">
                <li>
                    <img onClick={() => dispatch(changeAppNameAction('Related products'))} alt="" src="https://micro-frontends.org/0-model-store/images/tractor-red-thumb.jpg" />
                </li>
                <li>
                    <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-green-thumb.jpg" />
                </li>
                <li>
                    <img alt="" src="https://micro-frontends.org/0-model-store/images/tractor-blue-thumb.jpg" />
                </li>
            </ul>
        </div>
    )
}

App.propTypes = {
    children: PropTypes.Any
};

export default App;
