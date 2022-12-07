import React from "react"
import {Routes, Route} from 'react-router-dom'
import Header from "../components/Header"
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"

function App() {    
    return (
        <div>
          <Header/>
          <h1>Home Page</h1>
          <Routes>
            <Route exact path={'/'} >
              {/* <Photos/> */}
              Photos
            </Route>
            <Route path={'/cart'} >
              {/* <Cart/> */}
              Cart
            </Route>
          </Routes>
        </div>
    )
}

export default App