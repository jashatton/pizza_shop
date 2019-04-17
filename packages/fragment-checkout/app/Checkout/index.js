import React, { useEffect, useState } from 'react'

import './styles.scss'
import Purchase from '../Purchase'

const Checkout = () => {

  const [ purchases, setPurchases ] = useState([])

  useEffect(() => {
    document.addEventListener('pidiam:item:added', handleItemAdded)

    return () => {
      document.removeEventListener('pidiam:item:added', handleItemAdded)
    }
  })

  const handleItemAdded = (event) => {
    setPurchases([ ...purchases, event.detail ])
  }

  return (
    <div className="checkout">
      <div className="checkout-header">Checkout</div>

      {
        purchases.map((purchase, index) => (
          <Purchase key={index} purchase={purchase}/>
        ))
      }

    </div>
  )
}

export default Checkout
