import css from "./Contact.module.css";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";

function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contact}>
      <div className={css.text}>
        <div>
          <span className={css.iconName}>
            <ImUser />
          </span>
          <span>{name}</span>
        </div>
        <div>
          <span className={css.iconNumber}>
            <ImPhone />
          </span>
          <span>{number}</span>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Contact;
