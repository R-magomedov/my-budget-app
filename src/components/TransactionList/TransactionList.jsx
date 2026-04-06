import { useContext, useMemo } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import TransactionItem from "../TransactionItem/TransactionItem"
import styles from './TransactionList.module.scss'

const TransactionList = ({ filter, searchQuery}) => {
    const formattedDate = (dateString) => new Date(dateString).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
    })

    const { transactions } = useContext(TransactionContext)

    const normalizedQuery = searchQuery.trim().toLowerCase()

    const hasSearchQuery = normalizedQuery.length > 0

    const filteredTransactions = useMemo(() => {
        return transactions
        .filter(transaction => {
            if(filter === 'all') return true
            return transaction.type === filter
        })
        .filter(transaction => {
            if(!hasSearchQuery) return true
            return transaction.title.toLowerCase().includes(normalizedQuery)
        })
    }, [transactions, filter, normalizedQuery])
    
    const grouped = filteredTransactions.reduce((acc, transaction) => {
        const date = transaction.date
        
        if(!acc[date]) {
            acc[date] = []
        }
        acc[date].push(transaction)
        
        return acc
    }, {})

    const dates = Object.keys(grouped).toSorted((a, b) => new Date(b) - new Date(a))

    if(dates.length === 0) {
        if(hasSearchQuery) {
            return <div className={styles.emptyList}>Ничего не найдено</div>
        }

        return <div className={styles.emptyList}>Нет транзакций</div>
    }

    return (
        <ul className={styles.list}> 
            {dates.map(date => (
                <li key={date} className={styles.dateGroup}>
                    <time className={styles.dateHeader}>{formattedDate(date)}</time>
                    <ul className={styles.transactions}>
                        {grouped[date].map(transaction => (
                            < TransactionItem key={transaction.id} transaction={transaction} /> 
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default TransactionList