import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
const Context = createContext();


function ContextProvider(props){
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    axios.get(url)
      .then(res => setPhotos(res.data))
      .catch(err => console.log(err))
  }, [])

  const toggleFavorite = (id) => {
   setPhotos(photos.map(photo => {
    if (photo.id === id) {
      return {
        ...photo,
        isFavorite: !photo.isFavorite
      }
    } else return photo
   }))
  }
  console.log(photos)

  return (
    <Context.Provider value={{photos, toggleFavorite}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}