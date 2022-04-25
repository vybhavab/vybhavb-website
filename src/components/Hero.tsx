import React from 'react';
import {
  Box,
  Container,
  Heading,
  Link,
  Show,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const Hero = () => {
  const bgTextColor = useColorModeValue('gray.500', 'gray.200');
  return (
    <Container maxW="container.lg">
      <Stack
        as={Box}
        textAlign="left"
        py={{ base: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{
            base: '2xl', sm: '2xl', md: '3xl', lg: '4xl',
          }}
          lineHeight="110%"
        >
          Hey I&apos;m Vybhav&nbsp;
          <Text
            fontSize={{
              base: 'sm', sm: 'sm', md: 'lg', lg: 'xl',
            }}
            color="gray.500"
            as="span"
          >
            (VY-buv)
          </Text>
        </Heading>

        <Show below="md">
          <Text
            fontSize="sm"
            color={bgTextColor}
          >
            tl;dr
            <br />
            I build stuff! Check some of them out over at&nbsp;
            <Link href="/projects" color={useColorModeValue('green.400', 'green.100')}>/projects</Link>
            &nbsp;
            If you&apos;d like to get in contact mail me →&nbsp;
            <Link
              href="mailto:vybavab@gmail.com"
              color={useColorModeValue('green.400', 'green.100')}
            >
              vybhavab@gmail.com
            </Link>
            or find me anywhere online&nbsp;
            <Link
              href="https://keybase.com/vybhavab"
              color={useColorModeValue('green.400', 'green.100')}
            >
              @vybhavab
            </Link>
          </Text>
        </Show>

        <Show above="md">
          <Text
            fontSize={{
              md: 'lg', lg: 'xl',
            }}
            display="block"
            color={bgTextColor}
          >
            tl;dr
            <br />
            I build scaleable, fast and secure applications. Check some of them out over at&nbsp;
            <Link href="/projects" color={useColorModeValue('green.400', 'green.100')}>/projects</Link>
            &nbsp;
            <br />
            Want to chat? Email me →
            {' '}
            <Link
              href="mailto:vybhavab@gmail.com"
              color={useColorModeValue('green.400', 'green.100')}
            >
              vybhavab@gmail.com
            </Link>
            {' '}
            or find me anywhere&nbsp;
            <Link
              href="https://keybase.com/vybhavab"
              color={useColorModeValue('green.400', 'green.100')}
            >
              @vybhavab
            </Link>
          </Text>
        </Show>
      </Stack>

    </Container>
  );
};
