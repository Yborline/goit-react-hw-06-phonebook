import PropTypes from "prop-types";
import s from "./listForm.module.css";
import { connect } from "react-redux";
import contactsAction from "../../redux/contact/contacts-action";

const ListForm = ({ onContacts, onDeleteContacts }) => {
  return (
    <ul className={s.list}>
      {onContacts.map((contact) => (
        <li className={s.line} key={contact.id}>
          <span>{contact.name}: </span>
          <span>{contact.number}</span>
          <button
            className={s.button}
            type="submit"
            onClick={() => onDeleteContacts(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ListForm.propTypes = {
  onContacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};

const findContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();
  if (filter.length) {
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return allContacts;
  }
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  onContacts: findContact(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContacts: (id) => dispatch(contactsAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListForm);
