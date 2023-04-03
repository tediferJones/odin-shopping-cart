import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

function App(props) {
  return (
    <div>
      <NavBar cartData={props.cartData} />
      <h1 className='title'>Hello World!</h1>
      <div>
        <h3 className='title'>New Items</h3>
        {/* Sort by ID, greatest to least */}
        <div className='shopContainer'>
          {props.shopItems.sort((a, b) => b.id - a.id).map(item => {
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
              </Link>
            )
          }).slice(0, 4)}
        </div>
      </div>
      <div>
        <h3 className='title'>Best Sellers</h3>
        {/* Sort by Price, greatest to least */}
        <div className='shopContainer'>
          {props.shopItems.sort((a, b) => b.price - a.price).map (item => {
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
              </Link>
            )
          }).slice(0, 4)}
        </div>
      </div>
    </div>
  );
}

export default App;
