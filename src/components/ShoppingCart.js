function ShoppingCart(props) {
  function getTotal(cartData) {
    let total = 0;
    const itemTotals = props.cartData.map(item => item.quantity * (item.price * 100));
    if (itemTotals.length === 0) {
      return (total).toFixed(2);
    }
    for (let i = 0; i < itemTotals.length; i++) total = total + itemTotals[i]
    return (total/100).toFixed(2);
  }

  return (
    <div className='cartContainer hidden'>
      <h3>Your Cart ({props.cartData.length})</h3>
      {props.cartData.map(item => {
        return (
          <div key={item.id}>
            <hr />
            <h3>{item.name}, {item.quantity} X ${item.price}</h3>
          </div>
        )
      })}
      <h2>Total</h2>
      <h2>${getTotal(props.cartData)}</h2>
    </div>
  )
}

export default ShoppingCart;
