import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar.js';

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
  }

  return (
    <div className='pageContainer'>
      <NavBar cartData={props.cartData} />
      <div className='itemContainer'>
        <div className='itemDetails'>
          <div className='imageSliderContainer'>
            <h1
              className='sliderButton'
              onClick={nextImage}
              value='-1'
            >{'<'}</h1>
            {images}
            <h1
              className='sliderButton'
              onClick={nextImage}
              value='1'
            >{'>'}</h1>
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
            className='addToCartButton'
            onClick={props.addToCart}
            value={currentItem.id}
          >Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ShopItem;

