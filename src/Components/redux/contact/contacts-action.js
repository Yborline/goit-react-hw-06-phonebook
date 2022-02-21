import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", (text) => ({
  payload: {
    id: nanoid(),
    number: text.number,
    name: text.name,
  },
}));

const deleteContact = createAction("contacts/delete");
const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };
