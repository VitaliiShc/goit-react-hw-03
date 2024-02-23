import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
    number: Yup.string()
      .min(3, 'Too short!')
      .max(50, 'Too long!')
      .required('Required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div className={css.fieldwrap}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name{' '}
            <span className={css.error}>
              <ErrorMessage name="name" />
            </span>
          </label>
          <Field
            name="name"
            type="text"
            id={nameFieldId}
            className={css.input}
          />
        </div>

        <div className={css.fieldwrap}>
          <label htmlFor={numberFieldId} className={css.label}>
            Number{' '}
            <span className={css.error}>
              <ErrorMessage name="number" />
            </span>
          </label>
          <Field
            name="number"
            type="text"
            id={numberFieldId}
            className={css.input}
          />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
