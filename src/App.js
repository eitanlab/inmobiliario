import React from 'react';
import SearchResults from './containers/SearchResults/SearchResults';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <SearchResults/>
    </ThemeProvider>
    </>
  );
}

export default App;
