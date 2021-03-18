import { ThemeProvider } from "styled-components";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import { light } from "./styles/theme";

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