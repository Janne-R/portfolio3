import { ThemeProvider } from "styled-components";
import theme from "./components/layout/theme";
import GlobalStyle from "./components/layout/GlobalStyles";
import Container from "./components/common/Container";
import Header from "./components/pages/home/Header";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;