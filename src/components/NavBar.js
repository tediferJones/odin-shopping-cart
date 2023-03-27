import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/shop'>Shop</Link>
    </div>
  )
}

export default NavBar;

