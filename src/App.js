import React from 'react';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <h1>Push Changes Using Cmd</h1>
     <Dinner disName = "Karahi" sweetDish = "kheer"/>
     <Dinner sweetDish = "Halwa" disName = "Baryani" />
    </div>
  );
}

export default App;

