// src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import styles from './ContactList.module.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
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
