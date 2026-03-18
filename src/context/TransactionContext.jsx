import React, { createContext, useState } from 'react'

export const TransactionContext = createContext()

export const TransactionProvider = ({children}) => {

    const [transactions, setTransactions] = useState([
        {
            id: 1,
            title: 'Зарплата',
            amount: 85000,
            type: 'income',
            date: '2026-03-15'
        },
        {
            id: 2,
            title: 'Продукты',
            amount: 300,
            type: 'expense',
            date: '2026-03-25'
        }
    ])

    const addTransaction = (transaction) => {
        const transactionWithId = {
            ...transaction,
            id: Date.now()
        }

        setTransactions(prev => [...prev, transactionWithId])
        
    }

    const deleteTransaction = (id) => {
        setTransactions(prev => prev.filter(transaction => transaction.id !== id))
    }

  return (
    <TransactionContext.Provider value={{transactions, addTransaction, deleteTransaction}}>
        {children}
    </TransactionContext.Provider>
  )
}
