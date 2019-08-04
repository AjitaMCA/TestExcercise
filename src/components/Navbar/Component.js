import React, { PropTypes } from 'react';
import {
  Fixed,
  NavItem,
  Space,
  Toolbar,
} from 'rebass';
import './style.scss';

const Navbar = ({
  toogleDropdown,
  isDropdownOpen,
  paragraphs,
  scrollToParagraph,
  scrollToHeader,
}) => (
  <Fixed top left right zIndex={1}>
    <Toolbar style={{'background-color':'transparent',color: 'black','align-items': 'left'}}>
          {paragraphs.map(({ id, title }) =>
            <NavItem key={id} onClick={() => scrollToParagraph(id)}>
              {title}
            </NavItem>
          )}
      <Space auto />
      <Space />
      <NavItem onClick={scrollToHeader}>
        CONTACT
      </NavItem>
      <NavItem onClick={scrollToHeader}>
        LOGIN
      </NavItem>
    </Toolbar>
  </Fixed>
);

Navbar.propTypes = {
  toogleDropdown: PropTypes.func.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  scrollToParagraph: PropTypes.func.isRequired,
  scrollToHeader: PropTypes.func.isRequired,
};

export default Navbar;
