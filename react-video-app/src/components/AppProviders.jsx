import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import { darkTheme } from "../styles/theme";

function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppProviders;
