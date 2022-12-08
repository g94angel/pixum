import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

const CartItem = ({item, removeFromCart}) => {
  // const [hovered, setHoverState] = useState(false)
  // destructuring hovered (false) and ref (with added event listeners) from useHover
  const [hovered, ref] = useHover()

  const iconClassName = hovered ? 'ri-delete-bin-fill': 'ri-delete-bin-line'

  return (
    <>
      <div className='cart-item' >
        <i 
          className={iconClassName} 
          onClick={() => removeFromCart(item.id)}
          // adding ref attr, so now this icon has enter and leave functions added to it (from useHover hook)
          ref={ref}
        >  
        </i>
        <img src={item.url} width='130px' />
        <p>Price: $5.99</p>
      </div>
      {/* adding a horizontal rule for nice split */}
      <hr/>
    </>
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