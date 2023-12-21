import React from 'react';
import FormComponent from './Pages/CreateForm';
import { GlobalStyle } from './styles/styles';

const App = () => {
  return (

      <div style={{ height: "100%", width: "100%" }}>
        <h1>Cria o seu formulario</h1>
        <FormComponent />
      </div>
  );
};

export default App;