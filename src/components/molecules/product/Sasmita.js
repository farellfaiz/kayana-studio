import { 
    Box, 
    Center, 
    Grid, 
    useBreakpointValue 
} from '@chakra-ui/react'
import { ProductImage, ProductInfo } from './../../'

const Sasmita = () => {
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" })
    const responsiveHeight = useBreakpointValue({ base: "1550px", sm: "1450px", md: "1000px" })

    return (
        <Box bg="gray.50" w="100%" h={responsiveHeight} paddingY="50px" paddingX={5}>
            <Center>
                <Box width="700px">
                    <Grid templateColumns={responsiveGrid} gap="30px">
                        <Box bg="white" shadow="md" borderRadius="5px">
                            <Center>
                                <ProductImage
                                    imgA="/img/sasmita/sasmita-1.jpg"
                                    imgB="/img/sasmita/sasmita-2.jpg"
                                    imgC="/img/sasmita/sasmita-3.jpg"
                                    imgD="/img/sasmita/sasmita-4.jpg"
                                />
                            </Center>
                        </Box>
                        <Box>
                            <ProductInfo
                                name="Sasmita"
                                price="249.000"
                                size="All Size"
                                sizeInfo="110 cm x 110 cm"
                                desc="Sasmita is an Indonesian fauna inspired art in a form of printed 
                                fabric designed as an outer, which raises the theme “sunset” that is illustrated 
                                by the dark-colored base of our cloth. There are buttons on the  two corners of 
                                the cloth that elevates practicality in using our art. This outer can be worn in 
                                multiple ways, and we’re letting you to express your creativity in wearing our 
                                art in your own unique ways."
                                material="Voal"
                                shopee="http://shopee.co.id/kayana__studio"
                            />
                        </Box>
                    </Grid>
                </Box>
            </Center>
        </Box>
    )
}

export default Sasmita
