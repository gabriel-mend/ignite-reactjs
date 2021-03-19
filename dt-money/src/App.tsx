import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { light } from "./styles/theme";
import { createServer } from 'miragejs'
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Trasaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ]
    })
  }
})

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModal(false)
  }
  
  return (
    <ThemeProvider theme={light}>
      <>
        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />
        <Dashboard />
        <NewTransactionModal 
          isOpen={isNewTransactionModal}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}