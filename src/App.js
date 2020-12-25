import React from 'react';
import Dinner from './dinner.js';

function App() {
  return (
    <div>
      <h1>Hello World of Fame</h1>
     <Dinner disName = "Karahi" sweetDish = "kheer"/>
     <Dinner sweetDish = "Halwa" disName = "Baryani" />
    </div>
  );
}

export default App;

