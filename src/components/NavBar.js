import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js';

function NavBar(props) {
  function toggleCart(e) {
    document.getElementsByClassName('cartContainer')[0].classList.toggle('hidden');
  }

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <div className='linkContainer'>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </div>
        <div
          className='cartIcon'
          onClick={toggleCart}
        >Cart</div>
      </div>
      <ShoppingCart 
        cartData={props.cartData}
      />
    </div>
  )
}

export default NavBar;

