import styles from './SearchTransactionsForm.module.scss'

const SearchTransactionsForm = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className={styles.container}>
        <input 
            type="search" 
            placeholder="Поиск транзакции"
            onChange={({target}) => setSearchQuery(target.value)}
            value={searchQuery}
            aria-label="Поиск транзакций"
            className={styles.input}
        />
    </div>
  )
}

export default SearchTransactionsForm