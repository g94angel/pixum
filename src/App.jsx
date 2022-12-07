import React from "react"
import {Routes, Route} from 'react-router-dom'
import Header from "../components/Header"
import Nav from "../components/Nav"
import Cart from "../pages/Cart"
import Photos from "../pages/Photos"





function App() {    
    return (
        <div>
          <Header/>
          <h1>Home Page</h1>
          <Routes>
            <Route path="/">
              <Route index element={<Photos/>} />
              <Route path="cart" element={<Cart/>}/>
            </Route>
            
          </Routes>
        </div>
    )
}

export default App