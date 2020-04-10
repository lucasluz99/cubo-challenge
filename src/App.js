import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
