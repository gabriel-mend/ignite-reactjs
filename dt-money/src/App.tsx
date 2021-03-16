import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { light } from "./styles/theme/theme";

export function App() {
  return (
    <ThemeProvider theme={light}>
      <h1>Hello World</h1>
      <GlobalStyles />
    </ThemeProvider>
  );
}