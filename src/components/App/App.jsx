import './App.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

/* const phoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; */
// [{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]

function getInitialStats() {
  const contacts = window.localStorage.getItem('phoneBook');
  return contacts !== null ? JSON.parse(contacts) : [];
}

const App = () => {
  const [contacts, setContacts] = useState(getInitialStats);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify([...contacts]));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleInputText = (evt) => {
    setSearchText(evt.target.value);
  };

  const delContact = (delId) => {
    setContacts(contacts.filter((contact) => contact.id !== delId));
  };

  const addContact = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    setContacts((contacts) => [newContact, ...contacts]);
    actions.resetForm();
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onChange={handleInputText} />
      <ContactList contacts={filteredContacts} delContact={delContact} />
    </>
  );
};

export default App;
