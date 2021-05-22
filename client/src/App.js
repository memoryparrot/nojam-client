import React from "react";
import Router from "./Components/Router";
import GlobalStyles from "./assets/styles/GlobalStyles";
import theme from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
