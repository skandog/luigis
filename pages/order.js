import { Container, Menu } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import dummydata from '../lib/dummy.js'
import MenuItem from '../components/menu_item.js'

const Order = () => {
  const [page, setPage] = useState(0)
  const [items, setItems] = useState(dummydata)
  // useEffect(() => {
  //   async function FetchPage() {
  //     let response = await fetch(
  //       `https://api.spoonacular.com/food/menuItems/search?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=pizza&offset=${page}`
  //     )
  //     let json = await response.json()
  //     console.log(json)
  //     setItems([...json.menuItems])
  //   }
  //   FetchPage()
  // }, [page])

  return (
    <Container>
      {items.map((item, index) => {
        return (
          <MenuItem
            item={item}
            title={item.title}
            key={index}
            thumbnail={item.image}
            alt={item.title}
          />
        )
      })}
      <button
        onClick={() => {
          setPage(page + 1)
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          setPage(page - 1)
        }}
      >
        Prev
      </button>
    </Container>
  )
}

export default Order
