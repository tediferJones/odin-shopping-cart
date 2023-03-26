import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import ShopItem from './pages/ShopItem.js';
import './App.css';

function App() {
  // it seems like this is the root of our project, so any logic that will be shared between components need to go in here

  const [cartData, setCartData] = useState([]);
  // const [itemQuantity, setItemQuantity] = useState(1);

  // This is our mock data, in a real world scenario this data should be acquired through a database lookup
  // Because of the way react works, we have to hardcode id numbers, otherwise everytime our app refreshes the App.js will generate new id numbers 
  const shopItems = [
    newItem('Hat', 'Keeps your head warm!', 4.99, 1),
    newItem('Jacket', 'Keeps your body warm!', 19.99, 2),
    newItem('Socks', 'Keeps your feet warm!', 3.99, 3),
  ]

  function newItem(name, description, price, id) {
    return {
      name,
      description,
      price,
      id,
    }
  }

  function addToCart(e) {
    // APPEND QUANTITY TO OBJECT WHEN ADDED TO CART
    e.preventDefault();
    const itemToAdd = shopItems.filter(item => item.id === Number(e.target.itemId.value))[0];
    itemToAdd.quantity = e.target.quantity.value;
    setCartData(cartData.concat(itemToAdd));
    console.log(cartData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home
            cartData={cartData}
          />}
        />
        <Route
          path='/shop'
          element={<Shop
            cartData={cartData}
            shopItems={shopItems}
            addToCart={addToCart}
          />}
        />
        <Route 
          path='/shop/:id'
          element={<ShopItem
            shopItems={shopItems}
            addToCart={addToCart}
          />}
        />
      </Routes>
    </BrowserRouter>
  )
}

// TO-DO
//    - Add cart component, should have a running total for all items in cart
//    - Replace all <a href=''></a> with <Link to=''></Link>

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
