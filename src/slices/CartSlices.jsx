import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("Cart")) || [];

const cartSlices = createSlice ({
    name:"Cart",
    initialState,
    reducers:{
        AddItem:(state,action)=>{
            state.push(action.payload)
            localStorage.setItem("Cart",JSON.stringify(state));
        },
        RemoveItem:(state,action)=>{
            const updatedCart = state.filter((_, index) => index !== action.payload.index);
            localStorage.setItem("Cart",JSON.stringify(updatedCart))
            return updatedCart;
        }
    }
})

export const {AddItem,RemoveItem} = cartSlices.actions;
export default cartSlices.reducer