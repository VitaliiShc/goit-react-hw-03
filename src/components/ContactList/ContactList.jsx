import css from './ContactList.module.css'
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, delContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} delContact={delContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
