import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';
import {Context} from '../Context'

function Cart() {
  const [order, setOrder] = useState(false)
  const {cartItems, removeFromCart, emptyCart} = useContext(Context)

  localStorage.setItem('cartItems', JSON.stringify(cartItems))

  const cartItemElements = cartItems.map(item => (
    
      <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      
    
  ))

  function placeOrder() {
    setOrder(true)
    setTimeout(() => {
      emptyCart()
      setOrder(false)
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost' >Total: ${(cartItems.length * 5.99).toFixed(2)}</p>
      {cartItems.length > 0 ? 
      <div className='order-button' >
        <button onClick={placeOrder} >{!order ? "Place order" : 'Ordering...'}</button>
      </div> :
      <p>You don't have any items in your cart.</p>
      }
    </main>
  );
}

export default Cart;
