import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import { cartContext } from '../components/contexts/contexts'
const Website = ({ Component, pageProps, router }) => {
  const [cart, setCart] = useState([{ id: 1 }])
  const [boughtItems, setBoughtItems] = useState([
    {
      id: 387582,
      title: 'Combo Pizza (Slice)',
      image: 'https://images.spoonacular.com/file/wximages/387582-312x231.png',
      count: 1
    },
    {
      id: 403545,
      title: 'Garden Party - Medium Pan (Slice)',
      image: 'https://images.spoonacular.com/file/wximages/403545-312x231.png',
      count: 1
    },
    {
      id: 387713,
      title: 'Gluten Free Manresa 12 Inch Pizza',
      image: 'https://images.spoonacular.com/file/wximages/387713-312x231.png',
      count: 1
    }
  ])
  function updateBoughtItems(item) {
    for (let i = 0; i < boughtItems.length; i++) {
      if ((item.id = boughtItems[i].id)) {
        setBoughtItems([
          ...boughtItems.slice(0, i),
          ...boughtItems.slice(i + 1),
          { ...item, count: boughtItems[i].count + 1 }
        ])
        return
      }
    }
    setBoughtItems([...boughtItems, { ...item, count: 1 }])
  }
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

        <boughtContext.Provider value={{ boughtItems, updateBoughtItems }}>
        <Layout router={router}>
            <Component {...pageProps} key={router.route} />
          </Layout>
        </boughtContext.Provider>
      </cartContext.Provider>
    </ChakraProvider>
  )
}

export default Website
