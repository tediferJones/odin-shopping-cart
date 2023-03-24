import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import './App.css';

function App() {
  // it seems like this is the root of our project, so any logic that will be shared between components need to go in here

  const [shoppingCart, setShoppingCart] = useState([]);

  function newItem(name, description, price) {
    return {
      name,
      description,
      price,
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'
        element={<Home shoppingCart={shoppingCart}/>}
        />
        <Route path='/shop'
        element={<Shop shoppingCart={shoppingCart}/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

// {/* <Router shoppingCart={shoppingCart}/> */}

// REQUIREMENTS:
//    - At least 2 pages, home and shop, we will probably also need a checkOut page
//      - Also have a navbar displayed on every page
//    - Cart should be visible at top of the shop page
//    - What do we want to our mock items to be?  Could be laptop parts
//      - Items will be objects, MIGHT EVENT WANT TO USE A CLASS
//      - USE OBJECT CONSTRUCTOR FOR THIS i.e. return { itemObject }
//      - example: item = {
//        name: 'SomeName',
//        description: 'SomeDescription',
//        price: SomeNumber, // just display the dollar sign next to the input
//        icon?: SomeImage,
//        quantity?: SomeNumber, // might not be necessary
//      }

export default App;
