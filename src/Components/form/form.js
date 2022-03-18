import { useState } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import s from "./form.module.css";
import { connect } from "react-redux";
import contactsActions from "../../redux/contact/contacts-action";

function Form({ valueForm, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameinputId = nanoid();
  const numberInputId = nanoid();

  const handleSubmit = (event) => {
    event.preventDefault();
    const state = { name, number };
    valueForm.some(
      (contact) => contact.number === number || contact.name === name
    )
      ? alert("Такой контакт уже есть")
      : onSubmit(state);
    reset();
  };

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setName(value);
  };

  const twohandleChange = (event) => {
    const { value } = event.currentTarget;
    setNumber(value);
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label htmlFor={nameinputId}>
        Имя{" "}
        <input
          className={s.inputName}
          value={name}
          onChange={handleChange}
          id={nameinputId}
          type="text"
          name="setName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberInputId}>
        <input
          className={s.inputNumber}
          id={numberInputId}
          onChange={twohandleChange}
          value={number}
          type="tel"
          name="setNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={s.button} type="submit">
        Save
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  valueForm: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsActions.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
