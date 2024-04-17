import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer:{
    cart: cartReducer,  //cartReducer is ready, aik reducer banchuka hai cart ka
    },
})