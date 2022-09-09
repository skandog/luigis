import {
  Box,
  Text,
  Container,
  LinkOverlay,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Lorem
} from '@chakra-ui/react'

import { useDisclosure } from '@chakra-ui/react'
import { cartContext } from '../components/contexts/contexts'
import { useContext } from 'react'

const MenuItem = ({ children, href, title, thumbnail, onClick, item }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { addToCart } = useContext(cartContext)
  return (
    <>
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
          <Button p={2} marginX={1}>
            Add to cart
          </Button>
          <Button onClick={onOpen}>More info</Button>
        </Container>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Description description description</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={() => addToCart(item)}>
              Add to basket{' '}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MenuItem
