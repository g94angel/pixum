import React, {useState, createContext, useEffect} from 'react'
import axios from 'axios'
const {Provider, Consumer} = createContext();

// # Challenge

// Get the JSON data with the photos information from the API and save it to context state

// 1. As soon as the ContextProvider component renders, get the JSON data from this url: 
// https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

// 2. Save the array of data that comes back to state.

// Review data fetching in React using `fetch`: 
// https://scrimba.com/p/p7P5Hd/c79Jask

function ContextProvider({children}){
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    axios.get(url)
      .then(res => setPhotos([res.data]))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <Provider value={{photos, setPhotos}}>
      {children}
    </Provider>
  )
}

export {ContextProvider, Consumer as ContextConsumer}