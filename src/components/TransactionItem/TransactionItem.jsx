import { useContext } from 'react'
import styles from './TransactionItem.module.scss'
import { TransactionContext } from '../../context/TransactionContext'
const TransactionItem = ({ 
    transaction: {
        id,
        title,
        amount,
        type,
        date
    }

}) => {
    const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long'
      })

    const { deleteTransaction } = useContext(TransactionContext)

    const color = type === 'income' ? styles.income : styles.expense
    
  return (
    <li className={styles.transactionItem}>
            <time>{formattedDate}</time>
        <div className={styles.transactionItem__details}>
            <div className={styles.transactionItem__title}>{title}</div>
            <div className={`${styles.transactionItem__amount} ${color}`}>{type === 'income' ? '+' : '-'}{amount}</div>
            <button onClick={() => deleteTransaction(id)} className={styles.transactionItem__button}>&#215;</button>
        </div>
    </li>
  )
}

export default TransactionItem