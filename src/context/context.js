import React, { useReducer, createContext } from 'react'

import contextReducer from './context.reducer'
const initialState = []

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(contextReducer, initialState);


    // Action creators
    const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id })


    const addTransaction = (transaction) => {
        console.log(transaction);
        return dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    }


    return <ExpenseTrackerContext.Provider value={{
        deleteTransaction, addTransaction,state
    }}> {children}</ExpenseTrackerContext.Provider >
}