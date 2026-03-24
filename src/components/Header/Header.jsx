import styles from './Header.module.scss'

const Header = ({onOpen}) => {
  return (
    <div className={styles.header}>
        <h1>💰 Мой бюджет</h1>
        <button onClick={onOpen}>Добавить</button>
    </div>
    
  )
}

export default Header
