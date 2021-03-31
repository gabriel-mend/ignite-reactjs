import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { light, dark } from "./styles/theme";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ThemeSwitcherProvider, useThemeSwitcher } from "./hooks/useThemeSwitcher";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)
  const { theme } = useThemeSwitcher()

  function handleOpenNewTransactionModal () {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionModal(false)
  }
  
  return (
    <ThemeSwitcherProvider>
        <ThemeProvider theme={theme === 'light' ? light: dark}>
        <TransactionsProvider>
          <Header 
            onOpenNewTransactionModal={handleOpenNewTransactionModal}
          />
          <Dashboard />
          <NewTransactionModal 
            isOpen={isNewTransactionModal}
            onRequestClose={handleCloseNewTransactionModal}
          />
          <GlobalStyles />
        </TransactionsProvider>
      </ThemeProvider>
    </ThemeSwitcherProvider>
  );
}