import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product: [],
    loading: false,
}


const product = createSlice({
    name: "product",
    initialState,
    reducers: {

    }

})

export default product.reducer