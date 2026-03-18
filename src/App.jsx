import { useContext } from "react"
import { TransactionContext } from "./context/TransactionContext"

function App() {
  const { transactions } = useContext(TransactionContext)
  return (
    <>
      <h1>Мой бюджет</h1>
      {console.log(transactions)}
    </>
  )
}

export default App
