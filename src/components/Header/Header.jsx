import styles from './Header.module.scss'

const Header = ({onOpenModal}) => {
  return (
    <div className={styles.header}>
        <h1>💰 Мой бюджет</h1>
        <button onClick={onOpenModal}>Добавить</button>
    </div>
    
  )
}

export default Header
