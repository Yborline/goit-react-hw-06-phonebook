import React from "react";
import PropTypes from "prop-types";
import s from "./filter.module.css";
import { connect } from "react-redux";
import contactsActions from "../redux/contact/contacts-action";

const Filter = ({ valueFilter, onChange }) => {
  return (
    <label>
      filter for name{" "}
      <input
        className={s.input}
        type="text"
        value={valueFilter}
        onChange={onChange}
      />
    </label>
  );
};

const mapStateToProps = (state) => ({
  valueFilter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  valueFilter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
