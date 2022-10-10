import { ThemeProvider } from "styled-components";
import theme from "./components/layout/theme";
import GlobalStyle from "./components/layout/GlobalStyles";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
