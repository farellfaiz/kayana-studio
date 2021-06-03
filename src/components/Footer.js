import {
    Box,
    Flex,
    Heading,
    InputGroup,
    Input,
    InputLeftElement,
    Divider,
    Button,
    Text,
  } from '@chakra-ui/react'

import { FaRegEnvelope, FaShoppingBag, FaInstagram } from 'react-icons/fa'
import { IconFooter } from '.'

const Footer = () => {
    return (
        <Box 
            position="absolute" 
            bottom="-10" 
            w="100%" 
            bg="white"
            paddingTop={10}
        >
            <Divider position="absolute" top="0"/>
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Heading size="md" mb={2}>
                    Subscribe
                </Heading>
                <Text align="center" maxWidth="400px" marginX={4} marginBottom={4}>
                    Updates you’ll want to know about—new products, stories, and promos. No spam. Unsubscribe anytime.
                </Text>
                <form action="https://formsubmit.co/5f5d46b742f43c7c2b02668f6d42be16" method="POST">
                    <Flex justifyContent="center" alignItems="center" marginX={5} marginBottom={7}>
                        <InputGroup>
                            <Input 
                                borderRadius="8px 0px 0px 8px" 
                                _focus={{ boxShadow:"none" }}
                                placeholder="Email"
                                name="Email"
                            />
                            <InputLeftElement>
                                <FaRegEnvelope />
                            </InputLeftElement>
                        </InputGroup>
                        <Button 
                            type="submit"
                            paddingX={7} 
                            variant="solid" 
                            size="md" 
                            borderRadius="0px 8px 8px 0px"
                            color="white"
                            bg="gray.700"
                            _hover={{ bg:'gray.700' }}
                            _active={{ bg:'gray.700' }} 
                            _focus={{ boxShadow:"0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)" }}
                        >
                            Subscribe
                        </Button>
                    </Flex>
                </form>
                <Flex marginTop={4} justifyContent="center" alignItems="center" width="100%" bg="gray.100" paddingY={4}>
                    <a href="mailto:studiokayana@gmail.com">
                        <IconFooter icon={<FaRegEnvelope />} />
                    </a>
                    <a href="https://instagram.com">
                        <IconFooter icon={<FaInstagram />} mx="3" />
                    </a>
                    <a href="http://shopee.co.id/kayana__studio">
                        <IconFooter icon={<FaShoppingBag />} />
                    </a>
                </Flex>
                <Flex bg="gray.700" color="white" w="100%" justifyContent="center" paddingY={3}>
                    <Text fontWeight="thin" fontSize="15px">&copy; 2021 Kayana Studio</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer
