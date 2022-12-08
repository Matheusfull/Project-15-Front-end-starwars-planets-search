import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;

/*
1 - Vamos prover o estados para os componentes, que no caso será o componente Table
*/
