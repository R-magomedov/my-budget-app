import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from './AddTransactionModal.module.scss'
import { TransactionContext } from '../../context/TransactionContext'

const AddTransactionModal = ({onCloseModal}) => {
    const { addTransaction } = useContext(TransactionContext)

    const [formData, setFormData] = useState({
        title: '',
        amount: '',
        date: '',
        type: 'expense',        
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.title || !formData.amount || !formData.date) {
            alert('Заполните все поля')
            return
        }
        addTransaction(formData)
        setFormData({
            title: '',
            amount: '',
            date: '',
            type: 'expense',
        })
        onCloseModal()
    }

    const titleInputRef = useRef(null)

    useEffect(() => {
        titleInputRef.current.focus()
    }, [])

    useEffect(() => {
        const currentOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = currentOverflow
        }
    }, [])

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onCloseModal()
            }
        }
        
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [onCloseModal])

  return (
     <div className={styles.overlay} onClick={onCloseModal}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h2>Новая транзакция</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Название</label>
                    <input
                        type="text" 
                        placeholder="Название"
                        value={formData.title}
                        onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                        ref={titleInputRef}
                    />   
                </div>
                <div className={styles.formGroup}>
                    <label>Сумма</label>
                    <input 
                        type="number" 
                        placeholder="Сумма" 
                        value={formData.amount}
                        onChange={(e) => setFormData(prev => ({...prev, amount: Number(e.target.value)}))}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Дата</label>
                    <input 
                        type="date" 
                        placeholder="Дата" 
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
                    />

                </div>
                
                <div className={styles.radioGroup}>
                    <label className={formData.type === 'income' ? styles.activeIncome : ''}>
                        <input
                        type="radio" 
                        name="type" 
                        value="income" 
                        checked={formData.type === 'income'}
                        onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))}
                        />
                        Доход
                    </label>
                    <label className={formData.type === 'expense' ? styles.activeExpense : ''}>
                        <input
                        type="radio" 
                        name="type" 
                        value="expense" 
                        checked={formData.type === 'expense'}
                        onChange={(e) => setFormData(prev => ({...prev, type: e.target.value}))}
                        />
                        Расход
                    </label>
                </div>
                <button
                type="submit"
                >
                    Добавить
                </button>
                <button 
                type="button"
                onClick={onCloseModal} >
                    Отменить
                </button>
            </form>
        </div>
     </div>
    
  )
}

export default AddTransactionModal
