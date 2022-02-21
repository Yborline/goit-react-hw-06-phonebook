// import { useState, useEffect } from "react";
import "./App.css";
// import { nanoid } from "nanoid";
import ListForm from "./Components/listForm/listForm.js";
import Form from "./Components/form/form.js";
import Filter from "./Components/filter/Filter.js";
// import hooks from "./hooks/appHooks";

export default function App() {
  // const [contacts, setContacts] = hooks.useLocalStorage("phonebook", []);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("phonebook", JSON.stringify(contacts));
  // }, [contacts]);

  // const formSubmitHandler = (data) => {
  //   data.id = nanoid();
  // contacts.find((contact) =>contact.name.toLocaleLowerCase()
  // === data.name.toLocaleLowerCase() )
  //     ? alert("Такое имя уже занято")
  //     : setContacts( [...contacts, data] , contacts);
  // };
  // const changeFilter = (event) => {
  //   setFilter(event.currentTarget.value);
  // };

  // const findContact = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   if (filter.length) {
  //     return contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  //   } else {
  //     return contacts;
  //   }
  // };

  return (
    <div>
      <Form />
      <Filter />
      <ListForm />
    </div>
  );
}

// onSubmit={formSubmitHandler} valueForm={contacts}
// LIST onContacts={findContact} onDelete={deletedContact}
// valueFilter={filter} onChange={changeFilter}

// const deletedContact = (contactId) => {
//   setContacts(contacts.filter((contact) => contact.id !== contactId));
// };
