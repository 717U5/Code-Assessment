//Use raw or code to read this manual

**THIS IS THE MANUAL FOR THE CONTACT APP**

Code for replacement and compiler code are marked in between dash '-' line.

*Step 1: Set Up the Project*

Create a new React application using Create React App:
---------------------------------------------
npx create-react-app responsive-contacts-app
---------------------------------------------

Navigate to the project directory:
---------------------------------------------
cd responsive-contacts-app
---------------------------------------------

*Step 2: Replace Files*

Replace the contents of the src/components/ContactList.js file with the following code:
---------------------------------------------------------------------------------
// src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import styles from './ContactList.module.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div className={styles.contactList}>
      <h2 className={styles.title}>Contacts</h2>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.contactItem}>
            <strong>{contact.name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
--------------------------------------------------------------------------------

Create a new CSS file named ContactList.module.css in the src/components directory and add the following styles:
--------------------------------------------------------------------------------
/* src/components/ContactList.module.css */
.contactList {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.list {
  list-style: none;
  padding: 0;
}

.contactItem {
  border-bottom: 1px solid #ccc;
  padding: 15px;
  transition: background-color 0.3s;
}

.contactItem:last-child {
  border-bottom: none;
}

.contactItem:hover {
  background-color: #f5f5f5;
}
----------------------------------------------------------------------------------

Replace the contents of the src/App.js file with the following code:
----------------------------------------------------------------------------------
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
----------------------------------------------------------------------------------

Replace the contents of the src/App.css file with the following code:
----------------------------------------------------------------------------------
/* src/App.css */
.app {
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  background-color: #333;
  color: white;
  padding: 20px;
}

.app-main {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-footer {
  background-color: #333;
  color: white;
  padding: 10px;
}
-----------------------------------------------------------------------------------

*Step 3: Run the Application*

Open your terminal and navigate to the project directory if you're not already there.

Run the development server:
---------------------------------------
npm start
---------------------------------------
or
---------------------------------------
yarn start
---------------------------------------

The application should automatically open in your default web browser at 'http://localhost:3000'.
