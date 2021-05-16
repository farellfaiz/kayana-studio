import { Button, Flex, Heading, Text, Tooltip, Box, Divider, useBreakpointValue } from "@chakra-ui/react"
import { FaShoppingCart } from 'react-icons/fa'

const ProductInfo = ({ name, price, size, sizeInfo, desc, material, shopee }) => {
    const responsiveButtonWidth = useBreakpointValue({ base: "303px", sm: "668px", md: "303px" })

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
            <Text marginTop={3}>
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
            <a href={shopee} width="100%">
                <Button width="1000px" maxWidth={responsiveButtonWidth} marginY={5} leftIcon={<FaShoppingCart />}>
                    Order
                </Button>
            </a>
        </Flex>
    )
}

export default ProductInfo
