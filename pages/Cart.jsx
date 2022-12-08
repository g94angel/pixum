import React, {useContext, useState} from 'react';
import CartItem from '../components/CartItem';
import {Context} from '../Context'

function Cart() {
  const [order, setOrder] = useState(false)
  const {cartItems, removeFromCart, emptyCart} = useContext(Context)

  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
  ))

  function placeOrder() {
    setOrder(true)
    setTimeout(() => {
      emptyCart()
      setOrder(false)
    }, 3000)
//     Let our user place their order!

// Clicking the "Place Order" button should:
// 1. Change the text to "Ordering..."
// 2. Timeout for 3 seconds (to simulate an order being placed)
// 3. Log "Order placed!" to the console
// 4. Empty out the cart
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className='total-cost' >Total: ${cartItems.length * 5.99}</p>
      <div className='order-button' >
        <button onClick={placeOrder} >{!order ? "Place order" : 'Ordering...'}</button>
      </div>
    </main>
  );
}

export default Cart;
