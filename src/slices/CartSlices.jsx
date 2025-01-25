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
            const index = action.payload
            state.splice(index,1)
            localStorage.setItem("Cart",JSON.stringify(state))
            
        }
    }
})

export const {AddItem,RemoveItem} = cartSlices.actions;
export default cartSlices.reducer