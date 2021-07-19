const initialState = {};

const UPDATE_PRODUCT_ID = 'UPDATE_PRODUCT_ID';

export const updateProductId = (productId) => {
    return { type: UPDATE_PRODUCT_ID, payload: productId };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PRODUCT_ID: {
            return {
                ...state,
                productId: action.payload,
            };
        }
    }

    return state;
};

export default reducer;
