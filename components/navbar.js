import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle'
import { cartContext } from './contexts/contexts'
import { useContext } from 'react'
const LinkItem = ({ href, path, target, children, ...props }) => {
  //   const active = path === href
  //   const inactiveColor = useColorModeValue('black.200', "'whiteAlpha.900'")
  //   const activeColor = useColorModeValue('gray.500', 'whiteAlpha.600')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        // bg={active ? 'grassTeal' : undefined}
        // color={active ? activeColor : inactiveColor}
        target={target}
        // isDisabled={isDisabled}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const { cart } = useContext(cartContext)

  return (
    <Box
      position="static"
      as="nav"
      w="100%"
      // bg={useColorModeValue('#FBF4E2', '#0B0827')}
      css={{ backdropFilter: 'blur(100px)' }}
      zIndex={4}
      // borderColor={"green.300"}
      // borderWidth="thick"
      {...props}
    >
      <Container
        display="flex"
        p={3}
        maxW="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex> */}

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            Homepage
          </LinkItem>
          <LinkItem href="/order" path={path}>
            Order
          </LinkItem>
          {cart.length >= 2 ? (
            <LinkItem href="/checkout" path={path}>
              Checkout
            </LinkItem>
          ) : (
            <button disabled>Checkout</button>
          )}

          {/* <LinkItem
              target="_blank"
              href="https://github.com/skandog/luigis"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              <IoLogoGithub />
              Source
            </LinkItem> */}
        </Stack>

        <Box z-index={5} flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Homepage</MenuItem>
                </NextLink>
                <NextLink href="/order" passHref>
                  <MenuItem as={Link}>Order</MenuItem>
                </NextLink>

                {/* <MenuItem
                  as={Link}
                  href="https://github.com/skandog/luigis"
                  target="_blank"
                >
                  View Source
                </MenuItem> */}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
