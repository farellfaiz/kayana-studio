import { Menu } from "./";
import { Skeleton, Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue } from "@chakra-ui/react"
import { FaShoppingBag, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom";

const Navigation = () => {
    const [phoneSize] = useMediaQuery("(max-width: 500px)")
    const btnDisplay = useBreakpointValue({ base: "none", md: "inline-flex" })

    return (
        <Box 
            paddingX={10}
            paddingY={5}
            position="sticky"
            top="0"
            bg="white"
            zIndex={10}
            w="100%"
        >
            <Flex justifyContent="center">
                <Box>
                    <Menu />
                </Box>
                <Spacer />
                <Box position="absolute" top={phoneSize ? "8px" : "-8px"}>
                    <Link to="/">
                        <Skeleton isLoaded>
                            <Image src="/img/branding/kayana-logo.png" alt="Kayana Studio" width={phoneSize ? "60px" : "90px"} />
                        </Skeleton>
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Link to="/contact">
                        <IconButton display={btnDisplay} aria-label="Contact Us" icon={<FaPhoneAlt fontSize="13px" />} marginRight={2} variant="ghost" />
                    </Link>
                    <Link to="/shop">
                        <IconButton aria-label="Shop" icon={<FaShoppingBag fontSize="13px" />} />
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navigation
