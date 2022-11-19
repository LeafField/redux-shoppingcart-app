import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./featurese/cart/CartSlice"
import modalReducer from "./featurese/modal/ModalSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
})
