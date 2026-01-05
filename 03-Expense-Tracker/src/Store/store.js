import { configureStore } from "@reduxjs/toolkit";
import expense from "../features/Expense/expenseSlice"

const store = configureStore({
    reducer: {
        expense: expense
    }
})

export default store