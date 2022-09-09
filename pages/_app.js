import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import { cartContext } from '../components/contexts/contexts'
const Website = ({ Component, pageProps, router }) => {
  const [cart, setCart] = useState([{ id: 1 }])
  function addToCart(item) {
    if (cart.length === 0) {
      setCart([{ ...item, count: 1 }])
    }
    for (let i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        setCart([
          ...cart.slice(0, i),
          ...cart.slice(i + 1),
          { ...item, count: cart[i].count + 1 }
        ])
        return
      }
    }
    setCart([...cart, { ...item, count: 1 }])
  }

  function removeFromCart(item) {
    for (let i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        setCart([...cart.slice(0, i), ...cart.slice(i + 1)])
      }
    }
  }
  return (
    <ChakraProvider>
      <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </cartContext.Provider>
    </ChakraProvider>
  )
}

export default Website
