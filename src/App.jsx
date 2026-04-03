import './styles'
import { useState } from "react"
import Header from "./components/Header/Header"
import AddTransactionModal from './components/AddTransactionModal/AddTransactionModal'
import TransactionList from './components/TransactionList/TransactionList'
import Filters from './components/Filters/Filters'

function App() {

  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [ filter, setFilter ] = useState('all')

  return (
    <>
      < Header onOpenModal={openModal}/>
      {isModalOpen && < AddTransactionModal onCloseModal={closeModal}/>}
      < Filters filter={filter} setFilter={setFilter}/>
      < TransactionList filter={filter}/>
    </>
  )
}

export default App
