import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ShoppingCart from '../components/ShoppingCart.js';

function Shop(props) {
  return (
    <div>
      <NavBar cartData={props.cartData}/>
      <h1>Shop Page</h1>
      <ShoppingCart cartData={props.cartData}/>
      <div>
        {props.shopItems.map(item => {
          return (
            <Link to={`/shop/${item.id}`} key={item.id}>
              <img 
                src={item.images[0]}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              {/* <p>{item.description}</p> */}
              <p>${item.price}</p>
              {/* <Link to={`/shop/${item.id}`}>Buy Now</Link> */}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Shop;

