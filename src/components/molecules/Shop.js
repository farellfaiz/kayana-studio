import { Grid, Box, useBreakpointValue, Flex } from "@chakra-ui/react"
import { CollectionDesc, ItemBox } from './../'
import { Link } from "react-router-dom";

const Shop = () => {
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" })
    const responsiveHeight = useBreakpointValue({ base: "1500px", sm: "1000px" })

    return (
        <Box marginBottom={5} width="100%" h={responsiveHeight} bg="gray.50" paddingY={7}>
            <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
            <CollectionDesc />
            <Grid h="auto" templateColumns={responsiveGrid} gap="30px">
                <Link to="/product/arunika">
                    <ItemBox 
                        img="img/arunika/arunika-3.jpg" 
                        name="Arunika" 
                        price="249.000" 
                    />
                </Link>
                <Link to="/product/sasmita">
                    <ItemBox 
                        img="img/sasmita/sasmita-3.jpg" 
                        name="Sasmita" 
                        price="249.000" 
                    />
                </Link>
            </Grid>
            </Flex>
        </Box>
    )
}

export default Shop
