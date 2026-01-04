import { configureStore } from "@reduxjs/toolkit";
import expense from "../features/Expense/expenseSlice"

const store = configureStore({
    reducer: {
        Expense: expense
    }
})

export default store