import { useContext } from 'react'
import { cartContext, boughtContext } from '../components/contexts/contexts'
import Router from 'next/router'
const Checkout = () => {
  const { cart, setCart } = useContext(cartContext)
  const { updateBoughtItems } = useContext(boughtContext)
  console.log(cart)
  function handleCheckout() {
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i])
      updateBoughtItems(cart[i])
    }
    setCart([])
    Router.push('/')
  }
  return (
    <main style={{ display: 'flex' }}>
      <section>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Address"></input>
          <input placeholder="Postcode"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Phone number"></input>
        </form>
      </section>
      <section>
        {cart.map((item, index) => {
          return (
            <div key={index}>
              {item.title} - Qty: {item.count}
            </div>
          )
        })}
        <button onClick={handleCheckout}>Buy!</button>
      </section>
    </main>
  )
}

export default Checkout
