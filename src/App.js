import React from 'react'

import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Detail from './Detail'
import Sortdata from './Sortdata';
import Gardentip from './Gardentips/Gardentip';
import Search from './Search'
import Takecareplant from './Readmore/Takecareplant'
import Plantseed from './Readmore/Plantseed';
import Growmushroom from './Readmore/Growmushroom';
import Contact from './Contact/Contact'
import AboutUs from './Aboutus/Aboutus';
import Login from './Login/Login';

import Basket from './Basket/Basket';

import Home from './Home';

function App() {

   
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Gardentips' element={<Gardentip />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Gardentips/Takecareplant' element={<Takecareplant />} />
        <Route path='/Gardentips/Plantseed' element={<Plantseed />} />
        <Route path='/Gardentips/Growmushroom' element={<Growmushroom />} />
        <Route path='/Product/detail/:id' element={<Detail />} />
        <Route path='/Product/:name' element={<Sortdata />} />
        <Route path='/Product/search/:name' element={<Search />} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Aboutus'element={<AboutUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Basket' element={<Basket/>} />
      </Routes>
    </div>
  )
}

export default App;