import { createSlice, } from "@reduxjs/toolkit";

const saveLocalStorage = () => {
    const data = localStorage.getItem("expenses");
    return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (state) => {
    localStorage.setItem("expenses", JSON.stringify(state.expense));
};

const initialState = {
    expense: saveLocalStorage(),
    editItem: null,
};

const expenseSlice = createSlice({
    name: "expense",
    initialState,
    reducers: {
        addExpense: {
            reducer(state, action) {
                state.expense.push(action.payload);
                saveToLocalStorage(state);
            }
        },

        deleteExpense(state, action) {
            state.expense = state.expense.filter(
                (item) => item.id !== action.payload
            );
            saveToLocalStorage(state);
        },

        setEditExpense(state, action) {
            state.editItem = action.payload;
        },

        updateExpense(state, action) {
            const index = state.expense.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.expense[index] = action.payload;
                state.editItem = null;
                saveToLocalStorage(state);
            }
        },
    },
});

export const { addExpense, deleteExpense, setEditExpense, updateExpense, } = expenseSlice.actions;

export default expenseSlice.reducer;
