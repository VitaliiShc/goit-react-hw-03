import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Contact = ({ contact: { name, number } }) => {
  return (
    <>
      <div>
        <p className={css.text}>
          <BsFillPersonFill size="20" />
          &nbsp;{name}
        </p>
        <p className={css.text}>
          <BsFillTelephoneFill size="18" />
          &nbsp;{number}
        </p>
      </div>
      <button className={css.btn}>Delete</button>
    </>
  );
};

export default Contact;
