import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main.js'
import { cartContext, boughtContext } from '../components/contexts/contexts'
const Website = ({ Component, pageProps, router }) => {
  const [cart, setCart] = useState([
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
    console.log('in update bought with id:', item.id)
    for (let i = 0; i < boughtItems.length; i++) {
      if (item.id === boughtItems[i].id) {
        let temp = boughtItems
        temp[i].count += item.count
        console.log('found in bought')
        setBoughtItems([...temp])
        return
      }
    }
    setBoughtItems([...boughtItems, { ...item, count: 1 }])
  }
  function addToCart(item) {
    console.log('adding to cart')
    if (cart.length === 0) {
      setCart([{ ...item, count: 1 }])
    }
    for (let i = 0; i < cart.length; i++) {
      if (item.id === cart[i].id) {
        let temp = cart
        temp[i].count++
        setCart([...temp])
        console.log('new cart:, ', temp)
        return
      }
    }
    setCart([...cart, { ...item, count: 1 }])
    console.log('new cart:, ', [...cart, { ...item, count: 1 }])
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
      <cartContext.Provider
        value={{ cart, addToCart, removeFromCart, setCart }}
      >
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
