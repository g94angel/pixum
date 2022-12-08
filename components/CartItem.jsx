import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

const CartItem = ({item, removeFromCart}) => {
  // const [hovered, setHoverState] = useState(false)
  const [hovered, hoverRef] = useHover()

  const iconClassName = hovered ? 'ri-delete-bin-fill': 'ri-delete-bin-line'

  return (
    <div className='cart-item' >
      <i 
        className={iconClassName} 
        onClick={() => removeFromCart(item.id)}
        ref={hoverRef}
      >  
      </i>
      <img src={item.url} width='130px' />
      <p>Price: $5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }).isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default CartItem