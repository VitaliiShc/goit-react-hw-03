import './App.css';
import { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { nanoid } from 'nanoid'; // for Case 2

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';

/* // test data
const testData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]; 

function getInitialState() {
  const phoneBook = window.localStorage.getItem('phoneBook');
  return phoneBook !== null ? JSON.parse(phoneBook) : [...testData];
} */

function getInitialState() {
  const phoneBook = window.localStorage.getItem('phoneBook');
  return phoneBook !== null ? JSON.parse(phoneBook) : [];
}

const App = () => {
  const notify = (msg) => toast(msg);

  const [contacts, setContacts] = useState(getInitialState);
  const [filterContacts, setFilterContacts] = useState('');

  useEffect(() => {
    window.localStorage.setItem('phoneBook', JSON.stringify([...contacts]));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  const delContact = (delId) => {
    setContacts(contacts.filter((contact) => contact.id !== delId));
  };

  // Case 1:  the form reloads in any case, even if there is already a contact
  const addContact = (newContact) => {
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      console.log('Already have');

      return notify(`Contact ${newContact.name} already exists`);
    }
    setContacts((contacts) => [newContact, ...contacts]);
    notify(`Contact ${newContact.name} added`);
  };
  // End of case 1

  /*   //  Case 2 (good for UX): the form is not reseted if there already is contact and user can change contact's name. the form is reseted only after added a new contact
  const addContact = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      console.log('Already have');
      return;
    }
    setContacts((contacts) => [newContact, ...contacts]);
    console.log('Added');
    actions.resetForm();
  };
  // End of case 2 */

  return (
    <>
      <h1>Phonebook</h1>
      <button onClick={notify}>Notify!</button>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterContacts} onChange={setFilterContacts} />
      <ContactList contacts={visibleContacts} onDelete={delContact} />
      <ToastContainer />
    </>
  );
};

export default App;
