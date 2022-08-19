import { combineReducers } from "redux";
import { selectedDeletedProduct, productsReducer, selectedProductsReducer, editedProductReducer, addProductReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  deletedProduct:selectedDeletedProduct,
  editedProduct:editedProductReducer,
  addProduct:addProductReducer,
});
export default reducers;
