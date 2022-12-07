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
  
  return (
    <Context.Provider value={{photos}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}