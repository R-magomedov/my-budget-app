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

  const [ searchQuery, setSearchQuery ] = useState('')

  return (
    <>
      < Header onOpenModal={openModal}/>
      {isModalOpen && < AddTransactionModal onCloseModal={closeModal}/>}
      < Filters filter={filter} setFilter={setFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      < TransactionList filter={filter} searchQuery={searchQuery}/>
    </>
  )
}

export default App
