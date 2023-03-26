import { useParams } from 'react-router-dom';

function ShopItem() {
  const params = useParams();

  return (
    <div>
      <h1>Shop Item</h1>
      <p>Item id: {params.id}</p>
    </div>
  )
}

export default ShopItem;

