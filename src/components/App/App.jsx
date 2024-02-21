import './App.css';
// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

const phoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contactList, setContactList] = useState(phoneBook);
  const [searchText, setSearchText] = useState('');

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleInputText = (evt) => {
    setSearchText(evt.target.value);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <hr />
      <ContactForm />
      <hr />
      <SearchBox onChange={handleInputText} />
      <hr />
      <ContactList contacts={filteredContacts} />
      <hr />
    </>
  );
};

export default App;
