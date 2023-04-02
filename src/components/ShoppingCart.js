function ShoppingCart(props) {
  // function getTotal(cartData) {
  //   let total = 0;
  //   const itemTotals = props.cartData.map(item => item.quantity * (item.price * 100));
  //   if (itemTotals.length === 0) {
  //     return (total).toFixed(2);
  //   }
  //   for (let i = 0; i < itemTotals.length; i++) total = total + itemTotals[i]
  //   return (total/100).toFixed(2);
  // }

  const totalCost = (props.cartData.map(item => (item.price * 100) * item.quantity)
    .reduce((total, currentValue) => total = total + currentValue, 0) / 100).toFixed(2);
  
  const totalQuantity = props.cartData.map(item => item.quantity)
    .reduce((total, currentValue) => total = total + currentValue, 0);

  return (
    <div className='cartContainer hidden'>
      {/* <h3>Your Cart ({props.cartData.length})</h3> */}
      <h3>Your Cart ( {totalQuantity} )</h3>
      {props.cartData.map(item => {
        return (
          <div key={item.id}>
            <hr />
            {/* <h3>{item.name}, {item.quantity} X ${item.price}</h3> */}
            <div className='cartItem'>
              <h3>{item.name}</h3>
              <h3 className='itemQuantity'>{item.quantity} x ${item.price}</h3>
              <h3 className='itemTotal'>${((item.price * 100) * item.quantity / 100).toFixed(2)}</h3>
            </div>
          </div>
        )
      })}
      <hr />
      <div className='totalContainer'>
        <h2>Total</h2>
        {/* <h2>${getTotal(props.cartData)}</h2> */}
        <h2>{'$' + totalCost}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart;
