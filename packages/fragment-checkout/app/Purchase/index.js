import React from 'react'

import './styles.scss'

const Purchase = ({ purchase }) => {

  return (
    <div className="purchase">
      <div className="purchase-image-container">
        <img className="purchase-image" src={purchase.picture}/>
      </div>
      <div className="purchase-body">
        <div className="purchase-name">{purchase.name}</div>
      </div>
    </div>
  )
}

export default Purchase
