import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { light } from "./styles/theme";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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