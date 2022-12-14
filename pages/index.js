import { Container, Box, Flex, Img, Text, Link, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { cartContext } from '../components/contexts/contexts'
import { boughtContext } from '../components/contexts/contexts'

function FavCard({ item }) {
  const { addToCart } = useContext(cartContext)
  return (
    <Flex direction="column" align="center" gap="20px">
      <Text align="center" fontSize="20px">
        {item.title}
      </Text>
      <Img src={item.image}></Img>

      <Button bg="green" onClick={() => addToCart(item)}>
        <Text>Add to cart</Text>
      </Button>
    </Flex>
  )
}
function HomePage() {
  const { boughtItems } = useContext(boughtContext)
  boughtItems.sort((a, b) => {
    return b.count - a.count
  })
  console.log('bought', boughtItems)
  return (
    <Flex
      direction="column"
      gap="20px"
      mx="10vw"
      borderTop={'5px solid red'}
      borderBottom={'5px solid red'}
      fontWeight="600"
    >
      <Text fontSize="30px">Customers' favourites</Text>
      <Flex gap="10px" justify="space-evenly">
        <FavCard item={boughtItems[0]} />
        <FavCard item={boughtItems[1]} />
        <FavCard item={boughtItems[2]} />
      </Flex>
      <Link alignSelf="center" mt="30px" href="/order">
        <Button bg="green">
          <Text>View full menu 🍕</Text>
        </Button>
      </Link>
      <Text fontSize="30px">Our story</Text>
      <Text mb="20px">
        {' '}
        My mamma created the recipe for our signature tomato sauce when she came
        to this country in 1890... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </Text>
    </Flex>
  )
}

export default HomePage

// {cart[0].id}
