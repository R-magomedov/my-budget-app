import { useContext, useMemo } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import styles from './BalanceBlock.module.scss'

const BalanceBlock = () => {
    const { transactions } = useContext(TransactionContext)

    const stats = useMemo(() => 
        transactions.reduce((acc, transaction) => {
            if (transaction.type === 'income') {
                acc.income += transaction.amount
                acc.balance += transaction.amount
            } else {
                acc.expense += transaction.amount
                acc.balance -= transaction.amount
            }
            return acc
        }, { income: 0, expense: 0, balance: 0 })
    , [transactions])


    const { income, expense, balance } = stats
    
  return (
    <div className={styles.balanceBlock}>
        <div className={styles.main}>
            <span className={styles.label}>Баланс</span>
            <span className={styles.amount}>{balance.toLocaleString('ru-RU')} ₽</span>
        </div>
        <div className={styles.details}>               
            <div className={styles.income}>
                <span className={styles.label}>Доход</span>
                <span className={styles.amount}>+{income.toLocaleString('ru-RU')} ₽</span>
            </div>
            <div className={styles.expense}>
                <span className={styles.label}>Расход</span>
                <span className={styles.amount}>{expense.toLocaleString('ru-RU')} ₽</span>
            </div>
        </div>
    </div>
    
    
  )
}

export default BalanceBlock