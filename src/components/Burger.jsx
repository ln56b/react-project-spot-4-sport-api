import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Burger = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>MENU</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>HOME</DropdownItem>
        <DropdownItem>MAP</DropdownItem>
        <DropdownItem>SPORT</DropdownItem>
        <DropdownItem>ABOUT</DropdownItem>
        <DropdownItem>HELP</DropdownItem>
        <DropdownItem>CONTACT US</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Burger;
