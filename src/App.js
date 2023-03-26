import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import ShopItem from './pages/ShopItem.js';
import './App.css';

function App() {
  // it seems like this is the root of our project, so any logic that will be shared between components need to go in here

  const [cartData, setShoppingCart] = useState([]);
  // const [itemQuantity, setItemQuantity] = useState(1);
  const shopItems = [
    newItem('Hat', 'Keeps your head warm!', 4.99),
    newItem('Jacket', 'Keeps your body warm!', 19.99),
    newItem('Socks', 'Keeps your feet warm!', 3.99),
  ]

  function newItem(name, description, price) {
    return {
      id: uuidv4(),
      name,
      description,
      price,
    }
  }

  function updateQuantity(e) {
    // 
  }

  function addToCart(e) {
    // APPEND QUANTITY TO OBJECT WHEN ADDED TO CART
    setShoppingCart(cartData.concat(JSON.parse(e.target.value)));
    console.log(cartData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home cartData={cartData}
          />}
        />
        <Route
          path='/shop'
          element={<Shop cartData={cartData}
            shopItems={shopItems}
            addToCart={addToCart}
          />}
        />
        <Route 
        path='/shop/:id'
          element={<ShopItem />}
        />
      </Routes>
    </BrowserRouter>
  )
}

// How do we add items to the cart?

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
