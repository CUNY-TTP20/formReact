import React from 'react';
import EForm from "./Components/FormTest";
import './App.css';

function App() {
  return (
    <div className="App">
      <EForm
        FirstName="Sagar"
        LastName="Shrestha"
      />      <EForm
        FirstName="Okay"
        LastName="Computer"
      />
    </div>
  );
}

export default App;
