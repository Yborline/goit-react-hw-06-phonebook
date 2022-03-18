import React from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contact/contacts-action";
import { getFilter } from "./filter-selectors";

export default function Filter() {
  const valueFilter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      filter for name{" "}
      <input
        className={s.input}
        type="text"
        value={valueFilter}
        onChange={(e) => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  valueFilter: PropTypes.string,
  onChange: PropTypes.func,
};
