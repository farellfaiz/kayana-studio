import { Heading, Text, Box, Flex } from '@chakra-ui/layout'
import React from 'react'

const CollectionDesc = () => {
    return (
        <Box marginBottom={6}>
            <Flex width="100%" flexDir="column" justifyContent="center" alignItems="center">
                <Heading marginBottom={2} size="lg">Arumita</Heading>
                <Text maxW="500px" marginX={5} align="center">
                    Our first collection is named “Arumita”, 
                    which stands for Arunika and Sasmita. Arunika in 
                    Sanskrit means sunrise, while Sasmita in Sanskrit 
                    means sunset. They are inspired by the Indonesian fauna, 
                    the exquisite Burung Cendrawasih and Kasuari of Papua.
                </Text>
            </Flex>
        </Box>
    )
}

export default CollectionDesc
