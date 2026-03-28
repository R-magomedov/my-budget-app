import './styles'
import { useState } from "react"
import Header from "./components/Header/Header"
import AddTransactionModal from './components/AddTransactionModal/AddTransactionModal'
import TransactionList from './components/TransactionList/TransactionList'

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      < Header onOpenModal={openModal}/>
      {isModalOpen && < AddTransactionModal onCloseModal={closeModal}/>}
      < TransactionList />
    </>
  )
}

export default App
