import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { light } from "./styles/theme";
import { createServer } from 'miragejs'

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

export function App() {
  return (
    <ThemeProvider theme={light}>
      <>
        <Header />
        <Dashboard />
        <GlobalStyles />
      </>
    </ThemeProvider>
  );
}