import React from 'react'

import './styles.scss'

const MenuItem = ({ menuItem }) => {

  const handleAddClick = (event) => {
    window.dispatchEvent(new CustomEvent('pidiam:item:added', { bubbles: true, detail: menuItem }))
  }

  return (
    <div className="menu-item">
      <div className="menu-item-image-container">
        <img className="menu-item-image" src={menuItem.picture}/>
      </div>
      <div className="menu-item-body">
        <div className="menu-item-name">{menuItem.name}</div>
        <div className="menu-item-description">{menuItem.description}</div>
      </div>
      <div className="menu-item-footer">
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  )
}

export default MenuItem
