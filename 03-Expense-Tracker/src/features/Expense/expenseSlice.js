import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    expense: [],
    loading: true,
}

const expense = createSlice({
    name: "expense",
    initialState,
    reducers: {

    }

})

export default expense.reducer