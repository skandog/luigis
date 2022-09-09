import { useContext } from 'react'
import { cartContext } from '../components/contexts/contexts'
function HomePage() {
  const { cart } = useContext(cartContext)
  return <div>Welcome to Next.js! {cart[0].id}</div>
}

export default HomePage
