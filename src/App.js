import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import ShopItem from './pages/ShopItem.js';
import './App.css';

function App() {
  const [cartData, setCartData] = useState([]);

  // This is our mock data, in a real world scenario this data should be acquired through a database lookup
  // Because of the way react works, we have to hardcode id numbers,
  // otherwise everytime our app refreshes the App.js will generate new id numbers 
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
    e.preventDefault();
    const itemToAdd = shopItems.filter(item => item.id === Number(e.target.itemId.value))[0];

    if (cartData.map(item => item.id).includes(Number(e.target.itemId.value))) {
      setCartData(cartData.map(item => {
        if (item.id === itemToAdd.id) {
          item.quantity = item.quantity + Number(e.target.quantity.value);
        }
        return item;
      }))
    } else {
      itemToAdd.quantity = Number(e.target.quantity.value);
      setCartData(cartData.concat(itemToAdd));
    }
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
            cartData={cartData}
            shopItems={shopItems}
            addToCart={addToCart}
          />}
        />
      </Routes>
    </BrowserRouter>
  )
}

// TO-DO
//    - add multiple images to each item, see loremflickr.com for more info
//    - WRITE SOME TESTS FOR YOUR COMPONENTS

export default App;
