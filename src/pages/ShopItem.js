import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
import ShoppingCart from '../components/ShoppingCart.js';

function ShopItem(props) {
  const params = useParams();

  const currentItem = props.shopItems.filter(item => item.id === Number(params.id))[0];

  const images = currentItem.images.map((imageLink, index) => {
    return (
      <img 
        src={imageLink}
        alt={`Random ${currentItem.name} ${index + 1}`}
        key={`${currentItem.name} ${index + 1}`}
        style={index == 0 ? { display: 'block' } : { display: 'none' } }
      />
    );
  });

  function nextImage(e) {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      if (images[i].attributes.style.value === 'display: block;') {
        const newImageIndex = i + Number(e.target.value);
        images[i].attributes.style.value = 'display: none;';
        if (newImageIndex < 0) {
          images[(images.length - 1)].attributes.style.value = 'display: block;';
        } else if (newImageIndex > images.length - 1) {
          images[0].attributes.style.value = 'display: block;';
        } else {
          images[newImageIndex].attributes.style.value = 'display: block;';
        }
        break
      }
    }
  }

  return (
    <div>
      <NavBar />
      <ShoppingCart cartData={props.cartData} />
      <h1>Shop Item</h1>
      <div>
        <button onClick={nextImage} value='-1'>PREVIOUS</button>
        {images}
        <button onClick={nextImage} value='1'>NEXT</button>
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
        </div>
      </div>
    </div>
  )
}

export default ShopItem;

