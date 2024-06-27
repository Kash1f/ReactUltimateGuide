import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer:{
    cart: cartReducer,  //cartReducer is ready, aik reducer banchuka hai cart ka
    },
})

//2. store is created and this store is further used with cartSlice.