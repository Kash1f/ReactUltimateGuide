//what is a slice?

// if an app has a lot of features like cart feature and chat feature so hum har feature ka apna slice bana sakte hain

//is cartSlice k andar jitne slices banengy wo cart se related banengy

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "Cart",
    initialState:[],    //empty array because is me items hongy
    reducers: {
        addItem: (state,action)=>{ //jo bhi user payload send karega wo isme aaiga like increment

        // state = [...state, action.payload];   //existing state spread and last me new items ko daaldia via action.payload
            state.push(action.payload)
        },
    },
})

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;

//Reducers:

//what can be the first reducer of the cart?
//Ans: To add items to the cart

//reducer will have addtoCart function with 2 parameters, state and action.

//what is state in this addItem function?
//hamari state aik empty array hai by default

//what is action in this addItem function?
//jo bhi user payload waghera send karega

// { addItem } will add items to the state and will be exported from here and imported in the products.jsx