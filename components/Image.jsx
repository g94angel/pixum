import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'
import useHover from '../hooks/useHover'

export default function Image({img, className}) {
  // const [hoverState, setHoverState] = useState(false)
  const [hoverState, ref] = useHover();
  const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
  
  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (hoverState) {
      return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  }

  function cartIcon() {
    const inCart = cartItems.find(item => item.id === img.id)
    if (inCart) {
      return <i className='ri-shopping-cart-fill cart' onClick={() => removeFromCart(img.id)} ></i>

    } else if (hoverState) {
      return <i className='ri-add-circle-line cart' onClick={() => addToCart(img)} ></i>
    }
  }
        
  
  // function handleHover() {
  //   setHoverState(prevState => !prevState)
  // }

  return (
    <div 
      className={`${className} image-container`} 
      ref={ref}
      // onMouseEnter={handleHover} 
      // onMouseLeave={handleHover} 
    >
      {heartIcon()}
      {cartIcon()}
      <img src={img.url} className="image-grid" />
    </div>
  )
}

Image.propTypes = {
  // describing the shape of the img object
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }).isRequired,
  className: PropTypes.string
}