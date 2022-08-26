import { combineReducers } from "redux";
import { selectedDeletedProduct, productsReducer, selectedProductsReducer, editedProductReducer, addProductReducer, buyProductReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  deletedProduct:selectedDeletedProduct,
  editedProduct:editedProductReducer,
  addProduct:addProductReducer,
  buyProduct:buyProductReducer,
});
export default reducers;
