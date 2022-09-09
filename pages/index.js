import { Container, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { cartContext } from '../components/contexts/contexts'
function HomePage() {
  const { cart } = useContext(cartContext)
  return (
    <Container>
      <Box w={'50%'} h={'10%'} bg="white" />
      <div>Welcome to Next.js! {cart[0].id}</div>
    </Container>
  )
}

export default HomePage
