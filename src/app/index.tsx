import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes';

// import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/core';
// import GlobalStyle from '~/styles/globals';
// import Routes from '~/routes';
// import { theme } from '~/theme';

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes />
      {/* <GlobalStyle /> */}
    </BrowserRouter>
    // </ThemeProvider>
  );
};

export default App;
