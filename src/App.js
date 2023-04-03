import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Shop from './pages/Shop.js';
import ShopItem from './pages/ShopItem.js';
import './App.css';

function App() {
  const [cartData, setCartData] = useState([]);
  const [itemQty, setItemQty] = useState(1);

  // This is our mock data, in a real world scenario this data should be acquired through a database lookup
  // Because of the way react works, we have to hardcode id numbers,
  // otherwise everytime our app refreshes the App.js will generate new id numbers 
  const shopItems = [
    newItem('Hat', 'Keeps your head warm!', 4.99, 1),
    newItem('Jacket', 'Keeps your body warm!', 19.99, 2),
    newItem('Socks', 'Keeps your feet warm!', 3.99, 3),
    newItem('Shoes', 'Keeps your feet dry!', 49.99, 4),
    newItem('Pants', 'Ya know... pants', 24.99, 5),
    newItem('Shorts', `They're the like pants, but short`, 24.99, 6),
    newItem('Shirt', 'Keeps your shirt on', 12.99, 7),
    newItem('Underwear', 'Goes on over the pants', 6.99),
  ];

  function newItem(name, description, price, id) {
    return {
      name,
      description,
      price,
      id,
      images: [
        `https://loremflickr.com/512/512/${name}?lock=1`,
        `https://loremflickr.com/512/512/${name}?lock=2`,
        `https://loremflickr.com/512/512/${name}?lock=3`,
      ],
    }
  }

  function itemQtyChangeHandler(e) {
    if (e.target.value < 1) {
      setItemQty(1);
    } else {
      setItemQty(Number(e.target.value));
    }
  }

  function addToCart(e) {
    const itemToAdd = shopItems.filter(item => item.id === Number(e.target.value))[0];

    if (cartData.map(item => item.id).includes(Number(e.target.value))) {
      setCartData(cartData.map(item => {
        if (item.id === itemToAdd.id) {
          item.quantity = item.quantity + itemQty;
        }
        return item;
      }))
    } else {
      itemToAdd.quantity = itemQty
      setCartData(cartData.concat(itemToAdd));
    }
    setItemQty(1);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home
            cartData={cartData}
            shopItems={shopItems}
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
            itemQty={itemQty}
            itemQtyChangeHandler={itemQtyChangeHandler}
          />}
        />
      </Routes>
    </BrowserRouter>
  )
}

// TO-DO
//    - Maybe try to make image slider transitions smoother
//    - Consider adding quantities to our mock items, 
//      - dont let the item quantity go above the total quantity
//    - WRITE SOME TESTS FOR YOUR COMPONENTS
//    - Add styling
//      - Add a big slider to our homepage, show multiple items

export default App;
