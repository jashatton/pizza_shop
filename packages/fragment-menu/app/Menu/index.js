import React from 'react'

import './styles.scss'

import { menuData }from '../data';
import MenuItem from '../MenuItem';

const Menu = () => (
  <div className="menu">
    {
      menuData.map((menuItem, index) => (
        <MenuItem key={index} menuItem={menuItem} />
      ))
    }
  </div>
);

export default Menu
