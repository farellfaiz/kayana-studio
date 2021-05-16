import Menu from "./Menu";
import { Box, Flex, Spacer, Image, IconButton, useMediaQuery, useBreakpointValue } from "@chakra-ui/react"
import { FaUserAlt, FaShoppingBag, FaPhoneAlt } from "react-icons/fa"
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
                        <Image src="/img/branding/kayana-logo.png" alt="Kayana Studio" width={phoneSize ? "60px" : "90px"} />
                    </Link>
                </Box>
                <Spacer />
                <Box>
                    <Link to="/shop">
                        <IconButton display={btnDisplay} aria-label="Shop" icon={<FaShoppingBag fontSize="13px" />} marginRight={2} variant="ghost" />
                    </Link>
                    <Link to="/contact">
                        <IconButton display={btnDisplay} aria-label="Contact Us" icon={<FaPhoneAlt fontSize="13px" />} marginRight={2} variant="ghost" />
                    </Link>
                    <Link to="/about">
                        <IconButton aria-label="About Kayana" icon={<FaUserAlt fontSize="13px" />} />
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Navigation
