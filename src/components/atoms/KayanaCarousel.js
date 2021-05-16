import { Image, Container, Center, Box, useBreakpointValue } from "@chakra-ui/react"
import { Carousel } from "react-responsive-carousel";

const KayanaCarousel = () => {
    const dynamicSize = useBreakpointValue({ base: "300px", sm: "450px", md: "700px" })
    return (
        <Container>
            <Center>
                <Box marginX={10} shadow="lg">
                    <Carousel width={dynamicSize} dynamicHeight={true} autoPlay infiniteLoop emulateTouch interval={2500} showIndicators={false} showStatus={false} showThumbs={false}>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-1.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-2.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-3.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-4.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-5.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-6.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-7.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-8.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-9.jpg" />
                        </Box>
                        <Box borderRadius="md">
                            <Image borderRadius="md" alt="" src="img/home/kayana-home-10.jpg" />
                        </Box>
                    </Carousel>
                </Box>
            </Center>
        </Container>
    )
}

export default KayanaCarousel
