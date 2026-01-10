import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: [],
    loading: false,
}


const product = createSlice({
    name: "product",
    initialState,
    reducers: {

        addProduct: (state, action) => {

            state.product.push(action.payload);

            console.log("product", [...state.product]);

        }


    }

})

export const { addProduct } = product.actions

export default product.reducer