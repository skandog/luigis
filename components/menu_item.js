import {
  Box,
  Text,
  Container,
  LinkOverlay,
  Image,
  Button
} from '@chakra-ui/react'
import { cartContext } from './contexts/contexts'
import { useContext } from 'react'
const MenuItem = ({ children, href, title, thumbnail, item }) => {
  const { addToCart } = useContext(cartContext)
  function handleClick() {
    console.log('handling click')
    addToCart(item)
  }
  return (
    <Box w="100%" textAlign="left">
      <Container
        display="flex"
        p={3}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Image
          src={thumbnail}
          alt={title}
          className="menu-item-thumbnail"
          placeholder="blur"
          loading="lazy"
          w={20}
        />
        <Text mt={2}>{title}</Text>
        <Button p={2} marginX={1} onClick={handleClick}>
          Add to cart
        </Button>
        <Button>More info</Button>
      </Container>
    </Box>
  )
}

export default MenuItem
