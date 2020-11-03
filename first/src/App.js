import React from 'react';
import './App.css';
import Photo from './Component/Profile/ProfilPhoto'
import Full from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <div className="App-header">
      <header className="App">
      <Photo/>
      <Full/>
      <Address/>
      </header>
      
    </div>
  );
}

export default App;