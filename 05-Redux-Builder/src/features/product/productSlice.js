import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: [],
    updateState: null,
    loading: false,
}


const product = createSlice({
    name: "product",
    initialState,
    reducers: {

        addProduct: (state, action) => {

            state.product.push(action.payload);

            // console.log("product", [...state.product]);

        },

        setUpdateState: (state, action) => {
            state.updateState = action.payload

        },

        updateProductData: (state, action) => {
            const index = state.product.findIndex((prod) =>
                prod.id === action.payload.id
            )

            if (index != -1) {
                state.product[index] = action.payload;
            }
            state.updateState = null
        },


        deleteProduct: (state, action) => {
            state.product = state.product.filter((prod) => {
                prod.id !== action.payload
            })
        }


    }

})

export const { addProduct, deleteProduct, setUpdateState, updateProductData } = product.actions

export default product.reducer