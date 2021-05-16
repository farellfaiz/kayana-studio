import { Box, Center, Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    const responsiveHeight = useBreakpointValue({ base: "1600px", sm: "1300px", md: "1200px" })
    const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" })
    const responsiveBorderRadius = useBreakpointValue({ base: "10px 10px 0 0", sm: "10px 0 0 10px" })

    return (
        <Box bg="gray.50" paddingY={7} width="100%" height={responsiveHeight} paddingY="60px">
            <Center>
                <Box width="600px" marginX={5} bg="white" borderRadius="10px" shadow="md" display="block">
                    <Box width="100%" paddingY={5} bg="#B7ADA2" borderRadius="10px 10px 0 0">
                        <Heading align="center" color="#2A2A2A">
                            About Kayana
                        </Heading>
                    </Box>
                    <Text margin={9}>
                        Nowadays, fashion has been
                        growing at a faster pace than
                        ever. Most Indonesian people
                        might have started to forget
                        about the identity of our own
                        culture, the heritage itself.
                        <br /><br />
                        Kayana Studio was built to
                        represent our Nusantara beauty
                        in a form of dailywear attire by
                        using our signature product
                        and most famous Indonesian
                        textile.

                        Our aim is to bust local motives
                        outbreak into today's fashion
                        trend. We promote it to wider
                        range of teenagers and adults.
                    </Text>
                </Box>
            </Center>
            <Center>
                <Box marginX={5} width="600px" marginX={5} bg="white" borderRadius="10px" shadow="md" marginTop="40px">
                    <Grid templateColumns={responsiveGrid} gap={0}>
                        <Box bg="#B7ADA2" borderRadius={responsiveBorderRadius}>
                            <Heading color="#2A2A2A" margin={9}>
                                Our Objectives and Goals
                            </Heading>
                            <Text margin={9}>
                            We have the objective to 
                            <b> preserve and promote
                            Indonesian culture
                            globally</b>. It is implemented
                            by making batik as the
                            choice of our daily wear.
                            </Text>
                        </Box>
                        <Box>
                            <Text margin={9}>
                                To make a realization, our
                                goals is to <b>design the
                                unique look with cultural
                                touch</b>, batik itself.
                                <br /><br />
                                We also have the goals to
                                <b>rebuild the image of local
                                culture into the daily-wear
                                looks</b>. Those will be
                                crystallize by adding some
                                modern touch to our batik
                                innovation.
                            </Text>
                        </Box>
                    </Grid>
                </Box>
            </Center>
        </Box>
    )
}

export default About
