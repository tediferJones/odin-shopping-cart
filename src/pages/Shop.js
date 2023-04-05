import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

function Shop(props) {
  return (
    <div>
      <NavBar cartData={props.cartData}/>
      <h1 className='title'>Shop Page</h1>
      <div className='shopContainer notScrollable'>
        {props.shopItems.map(item => {
          return (
            <Link
              to={`/shop/${item.id}`}
              key={item.id}
              className='shopLink'>
              <img 
                src={item.images[0]}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </Link>
          )
        })}
      </div>
      <div className='fakeFooter'></div>
    </div>
  )
}

export default Shop;

