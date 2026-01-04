import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    expense: [],
    loading: true,
}

const saveToLocalStorage = (state) => {
    localStorage.setItem("expenses", JSON.stringify(state.expense));
};


const expense = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: {
            reducer(state, action) {
                state.expense.push(action.payload)
                saveToLocalStorage(state)
            }
        }

    }

})

export default expense.reducer