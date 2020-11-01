import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';
import { theme } from '../theme';
import GlobalStyle from '../styles/globals';
import Menu from '../components/Menu';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Menu>
          <Routes />
        </Menu>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
