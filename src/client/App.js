import React from 'react';
import Routes from './components/Routes';
import { StoreProvider } from './store';

const App = () => {
  return (
    <StoreProvider>
      <header />

      <main>
        <Routes />
      </main>

      <footer />
    </StoreProvider>
  );
};

export default App;
