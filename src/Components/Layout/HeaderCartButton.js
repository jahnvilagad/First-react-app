import React from 'react'

import CartIcon from '../Cart/CartIcon'

import classes from '../Layout/HeaderCartButton.module.css'

const HeaderCartButton = () => {
  return (
    <div>
       <button className={classes.button}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={classes.badge}>0</span>
       </button>
    </div>
  )
}

export default HeaderCartButton
