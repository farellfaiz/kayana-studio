import { 
    Box, 
    Heading, 
    Text, 
    Image, 
    Flex, 
    useBreakpointValue
} from "@chakra-ui/react"


const ItemBox = ({ img, name, price }) => {

    return (
        <Box w="255px" bg="white" shadow="md" borderRadius={9} padding={4} marginTop={50}>
            <Flex flexDir="column" alignItems="center" justifyContent="center" position="relative">
                <Image 
                    src={img} 
                    width="230px" 
                    borderRadius={7} 
                    shadow="md" 
                    position="absolute"
                    top="-50px"
                />
                <Heading size="md" marginTop="300px">
                    {name}
                </Heading>
                <Text color="#6a6a6a">
                    Rp{price}
                </Text>
            </Flex>
        </Box>
    )
}

export default ItemBox
