import { useParams } from 'react-router-dom';

function ShopItem(props) {
  const params = useParams();

  const currentItem = props.shopItems.filter(item => item.id === Number(params.id))[0];

  return (
    <div>
      <h1>Shop Item</h1>
      <div>
        <img
          src={`https://loremflickr.com/512/512/${currentItem.name}`}
          alt='Random Hat'
        />
        <p>
          All Photos are Randomly Selected with 
          <a href='https://www.loremflickr.com'>loremflickr</a>
        </p>
        <div className='sidebar'>
          <h3>{currentItem.name}</h3>
          <p>{currentItem.description}</p>
          <p>${currentItem.price}</p>
          <form onSubmit={props.addToCart}>
            <input 
              type='hidden' 
              name='itemId'
              value={currentItem.id}
            />
            <input
              type='number'
              name='quantity'
              step='1'
              defaultValue='1'
            />
            <button>Add to Cart</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopItem;

