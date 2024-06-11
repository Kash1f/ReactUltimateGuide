import {createSlice} from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:" cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:(state,action) => {
            const itemPresent = state.cart.find(
                (item) => item.id === action.payload.id
            )
        }
    }
})