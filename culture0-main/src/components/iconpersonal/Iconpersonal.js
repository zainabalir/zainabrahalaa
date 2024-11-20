import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUserCircle } from 'react-icons/fa'; // Importing user icon
import 'bootstrap/dist/css/bootstrap.min.css';
import './iconpersonal.css'


function Iconpersonal () {
  return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle  id="dropdown-split-basic" className="d-flex align-items-center dropdownuser">
        <FaUserCircle size={24} style={{ marginRight: '8px' }} /> {/* User icon */}
        <span>Username</span> {/* Username */}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Iconpersonal;
