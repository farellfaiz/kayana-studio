import { Box, Center, Heading, Spacer, Flex, Textarea, Button } from "@chakra-ui/react"
import { KayanaInput } from ".."
import {
    FaUserAlt,
    FaPaperPlane,
    FaRegEnvelope,
    FaPhoneAlt
} from 'react-icons/fa'

const Contact = () => {

    return (
        <Box bg="gray.50" w="100%" h="850px" paddingY={7} paddingX={4}>
            <Center>
                <Heading size="lg">
                    Contact Us
                </Heading>
            </Center>
            <Center>
                <Flex w="600px" justifyContent="center" alignItems="center" marginY={7} flexDir="column" >
                    <Flex w="100%" justifyContent="center" alignItems="center">
                        <KayanaInput icon={<FaUserAlt color="#CBD5E0" />} type="text" placeholder="Name" />
                        <Spacer />
                        <KayanaInput icon={<FaRegEnvelope color="#CBD5E0" />} type="email" placeholder="Email" />
                    </Flex>
                    <Flex flexDir="column" w="100%" justifyContent="center" alignItems="center" paddingX={3} marginTop="-10px">
                        <KayanaInput icon={<FaPhoneAlt color="#CBD5E0" />} type="number" placeholder="Phone Number" />
                        <Textarea bg="white" height="200px" placeholder="Message" />
                        <Button leftIcon={<FaPaperPlane />} w="100%" marginY={3} colorScheme="telegram">
                            Send
                        </Button>
                    </Flex>
                </Flex>
            </Center>
        </Box>
    )
}

export default Contact
