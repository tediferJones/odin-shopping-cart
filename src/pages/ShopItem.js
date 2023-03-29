import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ShoppingCart from '../components/ShoppingCart.js';

function ShopItem(props) {
  const params = useParams();

  const currentItem = props.shopItems.filter(item => item.id === Number(params.id))[0];

  return (
    <div>
      <NavBar />
      <ShoppingCart cartData={props.cartData} />
      <h1>Shop Item</h1>
      <div>
        <img
          src={`https://loremflickr.com/512/512/${currentItem.name}`}
          alt='Random Hat'
        />
        <p>
          {/* using '&nbsp;' generates an html space at the end of the string that wont be trimmed off later*/}
          All Photos are Randomly Selected with&nbsp; 
          <a href='https://www.loremflickr.com'>loremflickr</a>
        </p>
        <div className='sidebar'>
          <h3>{currentItem.name}</h3>
          <p>{currentItem.description}</p>
          <p>${currentItem.price}</p>
          <button
            onClick={props.itemQtyChangeHandler}
            value={props.itemQty - 1}
          >-</button>
          <h4>{props.itemQty}</h4>
          <button
            onClick={props.itemQtyChangeHandler}
            value={props.itemQty + 1}
          >+</button>
          <button 
            onClick={props.addToCart}
            value={currentItem.id}
          >Add to Cart</button>
          {/*
          <form onSubmit={props.addToCart}>
            <input 
              type='hidden' 
              name='itemId'
              value={currentItem.id}
            />
            <input
              type='number'
              name='quantity'
              step='1'
              defaultValue='1'
            />
            <button>Add to Cart</button>
          </form>
          */}
        </div>
      </div>
    </div>
  )
}

export default ShopItem;

