import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) =>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload: products
    };
};


export const selectedProduct = (product) =>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload : product,
    }
}
export const editedProduct = (product) =>{
    return {
        type:ActionTypes.EDITED_PRODUCT,
        payload : product,
    }
}
export const addProduct = (product) =>{
    return {
        type:ActionTypes.ADD_PRODUCT,
        payload : product,
    }
}
export const selectedBuyProduct = (product) =>{
    return {
        type:ActionTypes.BUY_PRODUCT,
        payload : product,
    }
}


export const removeSelectedProduct = (product)=>{
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const selectedDeletedProduct = (product)=>{
    return{
        type:ActionTypes.SELECTED_DELETED_PRODUCT,
        payload:product
    }
}