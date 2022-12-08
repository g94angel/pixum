import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
const Context = createContext();


function ContextProvider(props){
  const [photos, setPhotos] = useState(JSON.parse(localStorage.getItem('photos')) || [])
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

  // don't need to run effect since the images are saved in localStorage
  // useEffect(() => {
  //   const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  //   axios.get(url)
  //     .then(res => setPhotos(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const toggleFavorite = (id) => {
   setPhotos(photos.map(photo => {
    if (photo.id === id) {
      return {
        ...photo,
        isFavorite: !photo.isFavorite,
        
      }
    } else return {
      ...photo,
      
    }
   }))
  }

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item])
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const emptyCart = () => {
    setCartItems([])
  }

  return (
    <Context.Provider value={{
      photos, 
      toggleFavorite, 
      cartItems, 
      addToCart,
      removeFromCart,
      emptyCart
    }}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}