import { useEffect, useState } from 'react'
const Order = () => {
  const [page, setPage] = useState(0)
  const [items, setItems] = useState([])
  useEffect(() => {
    async function FetchPage() {
      let response = await fetch(
        `https://api.spoonacular.com/food/menuItems/search?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=pizza&offset=${page}`
      )
      let json = await response.json()
      console.log(json)
      setItems([...json.menuItems])
    }
    // FetchPage()
  }, [page])
  return (
    <main>
      {items.map((item, index) => {
        return <div key={index}>{item.title}</div>
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
    </main>
  )
}

export default Order
