import React from 'react'

const CartItem = ({item, removeFromCart}) => {
  return (
    <div className='cart-item' >
      <i className='ri-delete-bin-line' onClick={()=> removeFromCart(item.id)} ></i>
      <img src={item.url} width='130px' />
      <p>Price: $5.99</p>
    </div>
  )
}

export default CartItem