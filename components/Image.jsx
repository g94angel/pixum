import React, {useState, useContext} from 'react'
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
