import { ActionTypes } from "../constants/action-types";

export const productsReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(state);
      return { ...state, products: payload };
    default:
        return state
  }
};

export const selectedProductsReducer = (state = {} , {type , payload})=>{
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state , ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state
    }
}
export const selectedDeletedProduct = (state = {} , {type , payload})=>{
  switch(type){
    case ActionTypes.SELECTED_DELETED_PRODUCT:
      return {...state , ...payload}
    default:
      return state
  }
}
export const editedProductReducer = (state = {} , {type , payload})=>{
  switch(type){
    case ActionTypes.EDITED_PRODUCT:
      return {...state , ...payload}
    default:
      return state
  }
}
export const addProductReducer = (state = {} , {type , payload})=>{
  switch(type){
    case ActionTypes.ADD_PRODUCT:
      return {...state , ...payload}
    default:
      return state
  }
}
