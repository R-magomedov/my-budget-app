import React from 'react'
import styles from './Filters.module.scss'

const Filters = ({ filter, setFilter}) => {
  return (
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
  )
}

export default Filters