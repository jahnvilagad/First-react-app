import React from 'react'

import Modal from '../UI/Modal';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItem = <ul className={classes['cart-items']}>{[{ id: '1', name: 'Sushi', amount: 2, price: 22.99 }].map((item) => <li>{item.name}</li>)}</ul>;
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>32.66</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>close</button>
          <button className={classes.button}>order</button>
      </div>
    </Modal>
  )
}

export default Cart
