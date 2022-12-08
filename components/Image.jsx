import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import { Context } from '../Context'

export default function Image({img, className}) {
  const [hoverState, setHoverState] = useState(false)
  const {toggleFavorite} = useContext(Context)

  const heartIcon = hoverState && 
    <i className={img.isFavorite ? "ri-heart-fill favorite" : "ri-heart-line favorite"} onClick={() => toggleFavorite(img.id)}></i>
        
  const cartIcon = hoverState && 
    <i className="ri-add-circle-line cart"></i>

  function handleHover() {
    setHoverState(prevState => !prevState)
  }

  return (
    <div 
      className={`${className} image-container`} 
      onMouseEnter={handleHover} 
      onMouseLeave={handleHover} 
    >
      {heartIcon}
      {cartIcon}
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