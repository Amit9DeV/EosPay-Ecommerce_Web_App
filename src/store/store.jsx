import { configureStore } from "@reduxjs/toolkit";
import cartSlicesReducer from '../slices/CartSlices'
const store = configureStore({
    reducer:cartSlicesReducer
})

export default store