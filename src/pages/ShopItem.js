import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.js';
// import ShoppingCart from '../components/ShoppingCart.js';

function ShopItem(props) {
  const params = useParams();

  const currentItem = props.shopItems.filter(item => item.id === Number(params.id))[0];

  const images = currentItem.images.map((imageLink, index) => {
    return (
      <img 
        src={imageLink}
        alt={`Random ${currentItem.name} ${index + 1}`}
        key={`${currentItem.name} ${index + 1}`}
        className={index === 0 ? 'shown' : 'hidden'}
      />
    );
    // style={index === 0 ? { display: 'block' } : { display: 'none' } }
  });

  function nextImage(e) {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      if (images[i].classList.value === 'shown') {
        let newImageIndex = i + Number(e.target.getAttribute('value'));
        if (newImageIndex < 0) newImageIndex = images.length - 1;
        if (newImageIndex > images.length - 1) newImageIndex = 0;

        images[i].classList.toggle('shown');
        images[i].classList.toggle('hidden');
        images[newImageIndex].classList.toggle('shown');
        images[newImageIndex].classList.toggle('hidden');
        break;
      }
    }

    // for (let i = 0; i < images.length; i++) {
    //   if (images[i].attributes.style.value === 'display: block;') {
    //     const newImageIndex = i + Number(e.target.value);
    //     images[i].attributes.style.value = 'display: none;';
    //     if (newImageIndex < 0) {
    //       images[(images.length - 1)].attributes.style.value = 'display: block;';
    //     } else if (newImageIndex > images.length - 1) {
    //       images[0].attributes.style.value = 'display: block;';
    //     } else {
    //       images[newImageIndex].attributes.style.value = 'display: block;';
    //     }
    //     break
    //   }
    // }
  }

  return (
    <div className='pageContainer'>
      <NavBar cartData={props.cartData} />
      {/* <ShoppingCart cartData={props.cartData} /> */}
      <div className='itemContainer'>
        <div className='itemDetails'>
          <h1>Shop Item</h1>
          <div className='imageSliderContainer'>
            <button onClick={nextImage} value='-1'>
              <h1 value='-1'>{'<'}</h1>
            </button>
            {images}
            <button onClick={nextImage} value='1'>
              <h1 value='1'>{'>'}</h1>
            </button>
          </div>
          <p>
            {/* using '&nbsp;' generates an html space at the end of the string that wont be trimmed off later*/}
            All Photos are Randomly Selected with&nbsp; 
            <a href='https://www.loremflickr.com'>loremflickr</a>
          </p>
        </div>
        <div className='sidebar'>
          <h1>{currentItem.name}</h1>
          <h4>{currentItem.description}</h4>
          <h4>${currentItem.price}</h4>
          <div className='quantity'>
            <button
              className='quantityButton'
              onClick={props.itemQtyChangeHandler}
              value={props.itemQty - 1}
            >-</button>
            <h1>{props.itemQty}</h1>
            <button
              className='quantityButton'
              onClick={props.itemQtyChangeHandler}
              value={props.itemQty + 1}
            >+</button>
          </div>
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

