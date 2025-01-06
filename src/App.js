import './App.css';
import HomePage from './Pages/HomePage';
import PhonesPage from './Pages/PhonesPage';
import TVPage from './Pages/TVPage';
import CartPage from './Pages/CartPage';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Product from './Components/Product/Product';

function App() {
  
  const [cart,setCart] = React.useState([]);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<HomePage/>}></Route>
          <Route element = {<HomePage cart = {cart} setCart ={setCart}/>} path='/home'></Route>
          <Route element = {<PhonesPage cart = {cart} setCart ={setCart}/>} path='/phones'></Route>
          <Route element = {<TVPage cart = {cart} setCart ={setCart} />} path='/tvs'></Route>
          <Route element = {<CartPage cart = {cart} setCart ={setCart} />} path='/cart'></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
