import { Box, 
         Container,
         Heading,
         Link,
         Stack,
         Text,
         useColorModeValue,
        } from '@chakra-ui/react';

const Index = () => {
    const bgTextColor = useColorModeValue("gray.500", "gray.200")
    return (
        <Container maxW={'container.lg'}>
            <Stack
            as={Box} 
            textAlign="left"
            py={{ base: 10}}>
                <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '4xl' }}
                lineHeight={'110%'}>
                    Hey I'm Vybhav <Text fontSize={{base: 'sm', sm: "sm",md:"lg", lg:'xl'}} color="gray.500" as="span">(VY-buv)</Text>
                </Heading>
            <Text fontSize={{base: 'sm', sm: "sm",md:"lg", lg:'xl'}} display={{md:'none'}} color={bgTextColor}>
                tl;dr:<br/>I like building fast, secure and scalabel solutions to problems. Currently I'm getting my
                Masters at <Link href="https://ucdavis.edu">UC Davis</Link>  
            </Text>
            <Text fontSize={{base: 'sm', sm: "sm",md:"lg", lg:'xl'}} display={{sm: 'none', md:"block"}} color={bgTextColor}>
                tl;dr<br/>I build scaleable, fast and secure applications. Check some of them out over at&nbsp;
                <Link href="/projects" color={useColorModeValue("green.400", "green.100")}>/projects</Link>&nbsp;
                Want to chat? Email me → contact@vybhavb.com or find me anywhere @vybhavb
            </Text>
            </Stack>
        </Container>
    );
};

export default Index;

//export { getServerSideProps } from "../common/chakra-color-manager";
