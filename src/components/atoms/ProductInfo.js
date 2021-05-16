import { Button, Flex, Heading, Text, Tooltip, Box, Divider } from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa'

const ProductInfo = ({ name, price, size, sizeInfo, desc, material, shopee }) => {
    return (
        <Flex flexDir="column" justifyContent="center" alignItems="flex-start">
            <Box paddingTop={2}>
                <Heading>
                    {name}
                </Heading>
                <Text color="gray.500" fontSize="21px">
                    Rp{price}
                </Text>
            </Box>
            <Text marginTop="3">
                {desc}
            </Text>
            <Text>
                Material: {material}
            </Text>
            <Box marginY={5}>
                <Text display="inline-block">
                    Size: <Text display="inline-block" fontStyle="italic" color="gray.500">(Hover/tap for size info)</Text>
                </Text>
                <Tooltip hasArrow label={sizeInfo} bg="gray.700" color="white" placement="top">
                    <Button display="block" marginTop={2}>
                        {size}
                    </Button>
                </Tooltip>
            </Box>
            <Divider />
            <a href={shopee}>
                <Button marginY={5} width="100%" leftIcon={<FaShoppingCart />}>
                    Order
                </Button>
            </a>
        </Flex>
    )
}

export default ProductInfo
