import { Grid, Box, useBreakpointValue, Flex } from "@chakra-ui/react"
import { Arunika, CollectionDesc, ItemBox } from './../'
import { Link } from "react-router-dom";

const Shop = () => {
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" })
    const responsiveHeight = useBreakpointValue({ base: "1500px", sm: "1000px" })

    const products = [
        {
            id: 1,
            name: 'Arunika',
            price: '249.000',
            img: 'img/arunika/arunika-3.jpg',
            collection: 'arumita',
            link: '/product/arunika'
        },
        {
            id: 2,
            name: 'Sasmita',
            price: '249.000',
            img: 'img/sasmita/sasmita-3.jpg',
            collection: 'arumita',
            link: '/product/sasmita'

        }
    ]

    return (
        <Box marginBottom={5} width="100%" h={responsiveHeight} bg="gray.50" paddingY={7}>
            <Flex flexDir="column" alignItems="center" justifyContent="center" w="100%">
            <CollectionDesc />
            <Grid h="auto" templateColumns={responsiveGrid} gap="30px">
                {products.map((product) => (
                    <Link to={product.link}>
                        <ItemBox 
                            img={product.img}
                            name={product.name}
                            price={product.price}
                        />
                    </Link>
                ))}
            </Grid>
            </Flex>
        </Box>
    )
}

export default Shop
