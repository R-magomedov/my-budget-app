import { useContext } from "react"
import { TransactionContext } from "../../context/TransactionContext"
import TransactionItem from "../TransactionItem/TransactionItem"
import styles from './TransactionList.module.scss'


const TransactionList = () => {

    const { transactions } = useContext(TransactionContext)
    
    
    return (
        <ul className={styles.transactionList}> 
            {transactions.map((transaction) => (
                    < TransactionItem
                        key = {transaction.id}
                        transaction = {transaction}
                    />
            ))}
        </ul>
  )
}

export default TransactionList