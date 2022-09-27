import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";

const UserBlock = (props) => (
  <NavDropdown title={props.UserName} variant="navbar" id="dropdown-light">
    <NavDropdown.Item href="/edit">Edit</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="/login">Log out</NavDropdown.Item>
  </NavDropdown>
);

UserBlock.propTypes = {
  UserName: PropTypes.string.isRequired,
};

export default UserBlock;
