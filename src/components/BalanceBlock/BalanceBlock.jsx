import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import styles from './BalanceBlock.module.scss'

const BalanceBlock = () => {
    const { transactions } = useContext(TransactionContext)

    const stats = transactions.reduce((acc, transaction) => {
        
        if (transaction.type === 'income') {
            acc.income += transaction.amount
            acc.balance += transaction.amount
        } else {
            acc.expense += transaction.amount
            acc.balance -= transaction.amount
        }
        
        return acc
    }, { income: 0, expense: 0, balance: 0 })
    const { income, expense, balance } = stats
    
  return (
    <div className={styles.balanceBlock}>
        <div className={styles.main}>
            <span className={styles.label}>Баланс</span>
            <span className={styles.amount}>{balance} ₽</span>
        </div>
        <div className={styles.details}>               
            <div className={styles.income}>
                <span className={styles.label}>Доход</span>
                <span className={styles.amount}>+{income} ₽</span>
            </div>
            <div className={styles.expense}>
                <span className={styles.label}>Расход</span>
                <span className={styles.amount}>{expense} ₽</span>
            </div>
        </div>
    </div>
    
    
  )
}

export default BalanceBlock