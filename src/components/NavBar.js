import { NavLink } from 'react-router-dom';
import ShoppingCart from './ShoppingCart.js';

function NavBar(props) {
  function toggleCart(e) {
    document.getElementsByClassName('cartContainer')[0].classList.toggle('hidden');
    document.getElementsByClassName('cartIcon')[0].classList.toggle('active');
  }

  const totalQuantity = props.cartData.map(item => item.quantity)
    .reduce((total, currentValue) => total = total + currentValue, 0);

  return (
    <div className='navbarContainer'>
      <div className='navbar'>
        <div className='linkContainer'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
        </div>
        <div
          className='cartIcon'
          onClick={toggleCart}
        >Cart ({totalQuantity})</div>
      </div>
      <ShoppingCart 
        cartData={props.cartData}
      />
    </div>
  )
}

export default NavBar;

