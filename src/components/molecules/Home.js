import { KayanaCarousel } from './../'
import { Box, Center, useBreakpointValue } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from 'react-player'

const Home = () => {
    const responsiveHeight = useBreakpointValue({ base: "800px", sm: "1000px", md: "1300px" })
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "700px" })

    return (
        <Box w="100%" height={responsiveHeight} paddingY={8} bg="gray.50">
            <KayanaCarousel />
            <Center>
                <Box marginTop={10}>
                    <ReactPlayer width={dynamicSize} url='https://www.youtube.com/watch?v=ojQbArbuN4E-U' />
                </Box>
            </Center>
        </Box>
    )
}

export default Home
