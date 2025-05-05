import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm({ onAdd }) {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {() => (
        <Form className={css.form}>
          <div className={css.label}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          <div className={css.label}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
