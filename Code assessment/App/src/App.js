// src/App.js
import React from 'react';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Responsive Contacts App</h1>
      </header>
      <main className="app-main">
        <ContactList />
      </main>
      <footer className="app-footer">
        <p>Powered by Your Name</p>
      </footer>
    </div>
  );
};

export default App;
