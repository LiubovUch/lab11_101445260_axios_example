import React from 'react';
import './App.css';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Person List App</h1>
      </header>
      <main>
        <PersonList />
      </main>
    </div>
  );
}

export default App;
