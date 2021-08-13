import { combineReducers, createStore, compose } from 'redux';

const initialState = {
    title: 'The Model Store',
    productId: 1,
    products: [
        {
            id: 1,
            title: 'Tractor Porsche-Diesel Master 419',
            image: 'https://micro-frontends.org/0-model-store/images/tractor-red.jpg',
            related: [4, 5, 6, 7]
        },
        {
            id: 2,
            title: 'Tractor Porsche-Diesel Master 420',
            image: 'https://micro-frontends.org/0-model-store/images/tractor-green.jpg',
            related: [4, 7, 8]
        },
        {
            id: 3,
            title: 'Tractor Porsche-Diesel Master 421',
            image: 'https://micro-frontends.org/0-model-store/images/tractor-blue.jpg',
            related: [8, 9 , 10]
        },
        {
            id: 4,
            title: 'Tractor Porsche-Diesel Master 422',
            image: 'https://micro-frontends.org/0-model-store/images/reco_3.jpg',
            related: [2, 3, 5]
        },
        {
            id: 5,
            title: 'Tractor Porsche-Diesel Master 423',
            image: 'https://micro-frontends.org/0-model-store/images/reco_5.jpg',
            related: [8, 9, 10]
        },
        {
            id: 6,
            title: 'Tractor Porsche-Diesel Master 424',
            image: 'https://micro-frontends.org/0-model-store/images/reco_6.jpg',
            related: [1, 2, 3]
        },
        {
            id: 7,
            title: 'Tractor Porsche-Diesel Master 425',
            image: 'https://micro-frontends.org/0-model-store/images/reco_4.jpg',
            related: [3, 4, 5]
        },
        {
            id: 8,
            title: 'Tractor Porsche-Diesel Master 426',
            image: 'https://micro-frontends.org/0-model-store/images/reco_1.jpg',
            related: [5, 6, 7]
        },
        {
            id: 9,
            title: 'Tractor Porsche-Diesel Master 427',
            image: 'https://micro-frontends.org/0-model-store/images/reco_8.jpg',
            related: [2, 5, 6]
        },
        {
            id: 10,
            title: 'Tractor Porsche-Diesel Master 428',
            image: 'https://micro-frontends.org/0-model-store/images/reco_7.jpg',
            related: [2, 3, 8]
        }
    ]
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const staticReducers = {
    productsReducer: productsReducer,
};

export default function configureStore() {
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose;

    const enhancer = composeEnhancers();
    const store = createStore(createReducer(), enhancer);

    store.asyncReducers = {};

    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };

    return store;
}

function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
}

export const store = configureStore();
