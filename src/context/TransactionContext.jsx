import React, { createContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'transactions'

export const TransactionContext = createContext()
export const TransactionProvider = ({children}) => {

    const [transactions, setTransactions] = useState(() => {
        const localTransactions = localStorage.getItem(STORAGE_KEY)
        if (localTransactions) {
            return JSON.parse(localTransactions)
        }

        return [
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
        ]
    })

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions))
    }, [transactions])

    const addTransaction = (transaction) => {
        const transactionWithId = {
            id: Date.now(),
            ...transaction
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
