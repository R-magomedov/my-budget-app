import BalanceBlock from '../BalanceBlock/BalanceBlock'
import styles from './Header.module.scss'

const Header = ({onOpenModal}) => {
  return (
    <div className={styles.header}>
        <h1>Мой бюджет</h1>
        < BalanceBlock />
        <button onClick={onOpenModal}>Добавить транзакцию</button>
    </div> 
    
  )
}

export default Header
