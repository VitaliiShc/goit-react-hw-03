import css from './ContactList.module.css'

// import contacts from '../../contacts.json';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
