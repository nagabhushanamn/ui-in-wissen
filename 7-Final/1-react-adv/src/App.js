import React from 'react';
import './App.css';

import A from './components/A';
import BadComponent from './components/BadComponent'
import GoodComponent from './components/GoodComponent'
import Try from './components/Try';

function App() {
  return (
    <div className="container">
      <hr />
      <h1> React concepts </h1>
      <hr />

      {
        /* 
          <A color="red" />
          <A color="green" />
          <A color="blue" /> 
        */
      }

      <hr />
      <hr />

      <GoodComponent />

      <Try>
        <BadComponent />
      </Try>


    </div>
  );
}

export default App;
