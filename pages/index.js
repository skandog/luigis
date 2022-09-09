import { Container, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { cartContext, boughtContext } from '../components/contexts/contexts'
function HomePage() {
  const { cart } = useContext(cartContext)
  const { boughtItems } = useContext(boughtContext)
  console.log('bought', boughtItems)
  return (
    <Container>
      <Box w={'50%'} h={'10%'} bg="white" />
      <div>Welcome to Next.js!</div>
    </Container>
  )
}

export default HomePage
