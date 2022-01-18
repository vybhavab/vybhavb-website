import React from 'react';

import {
  MoonIcon,
  SunIcon,
  CloseIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';

import {
  Box,
  Collapse,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react';

interface LinkElement {
  name: string,
  link: string
}

const Links: LinkElement[] = [

  {
    name: 'resume',
    link: '/resume.pdf',
  }, {
    name: 'projects',
    link: '/projects',
  }, {
    name: 'blog',
    link: 'https://blog.vybhavb.com',
  }];

const NavLink = (elem: LinkElement) => {
  const { link, name } = elem;
  return (
    <Link
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={link}
    >
      {name}
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            display={{ md: 'none' }}
            variant="link"
            onClick={isOpen ? onClose : onOpen}
          />
          <Box><Link href=".">vybhavb</Link></Box>
          <HStack spacing={8} alignItems="center">
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((l) => (
                <NavLink key={l.name + l.link} name={l.name} link={l.link} />
              ))}
              <IconButton
                aria-label="toggle dark and light mode"
                onClick={toggleColorMode}
                background="none"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              />
            </HStack>
          </HStack>
        </Flex>
        <Collapse
          in={isOpen}
          animateOpacity
        >
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as="nav" spacing={4}>
                {Links.map((l) => (
                  <NavLink key={l.name + l.link} name={l.name} link={l.link} />
                ))}
              </Stack>
            </Box>
          ) : null}
        </Collapse>
      </Box>
    </>
  );
};

export default Navbar;
