import React from 'react'
import styles from './Filters.module.scss'
import SearchTransactionsForm from '../SearchTransactionsForm/SearchTransactionsForm'


const Filters = ({ filter, setFilter, searchQuery, setSearchQuery}) => {
  return (
    <div className={styles.container}>
      <div className={styles.btnGroup}>
        <button 
            type='button' 
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
        >Все
        </button>

        <button 
            type='button' 
            className={filter === 'income' ? 'active' : ''}
            onClick={() => setFilter('income')}
        >Доходы
        </button>

        <button 
            type='button' 
            className={filter === 'expense' ? 'active' : ''}
            onClick={() => setFilter('expense')}
        >Расходы
        </button>
      </div>

      < SearchTransactionsForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </div>
    
  )
}

export default Filters