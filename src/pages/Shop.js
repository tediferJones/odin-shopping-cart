import NavBar from '../components/NavBar.js';

function Shop(props) {
  return (
    <div>
      <NavBar />
      <h1>Shop Page</h1>
      <div>
        {props.shopItems.map(item => {
          return (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <a href={`/shop/${item.id}`}>Buy Now</a>
              {/* <input type='number' step='1' min='0' /> */}
              {/* <button
                onClick={props.addToCart}
                value={JSON.stringify(item)}
              >Add To Cart
              </button> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Shop;

