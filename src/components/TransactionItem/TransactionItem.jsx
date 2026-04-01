import { useContext } from 'react'
import styles from './TransactionItem.module.scss'
import { TransactionContext } from '../../context/TransactionContext'

const TransactionItem = ({ 
    transaction: {
        id,
        title,
        amount,
        type,
    }
}) => {
    const { deleteTransaction } = useContext(TransactionContext)
    const color = type === 'income' ? styles.income : styles.expense
    
    return (
        <li className={styles.item}>
            <div className={styles.title}>{title}</div>
            <div className={`${styles.amount} ${color}`}>
                {type === 'income' ? '+' : '-'}{amount}
            </div>
            <button 
                onClick={() => deleteTransaction(id)} 
                className={styles.deleteBtn}
                aria-label="Удалить"
            >
                &#215;
            </button>
        </li>
    )
}

export default TransactionItem