import { createSlice } from "@reduxjs/toolkit";

//creating a slice of the redux store.
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        //additem is action. and this function is reducer function and this state parameter is initialState
        addItem : (state, action) => {
            //mutating our store here
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop()
        },
        clearcart: (state) => {
            state.items.length = 0;
        },
        setCartItems(state, action) {
            state.items = action.payload;
        },
    }
})

export const {addItem, removeItem, clearcart, setCartItems} = cartSlice.actions; //exporting the actions

export default cartSlice.reducer; //exporting the reducers.