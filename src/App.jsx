import { useState } from "react"
import Header from "./components/Header/Header"

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      < Header onOpen={openModal}/>
      {isModalOpen && <div>Модальное окно открыто</div>}
    </>
  )
}

export default App
