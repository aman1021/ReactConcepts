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

            //console.log(current(state)); to print the state variable and see its value as we can not directly print it using console.log(state);
            // state.items.length = 0;
            return {items : []}
        },
    }
})

export const {addItem, removeItem, clearcart, setCartItems} = cartSlice.actions; //exporting the actions

export default cartSlice.reducer; //exporting the reducers.