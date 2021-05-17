import { IconButton } from '@chakra-ui/react'

const IconFooter = ({ mx, icon }) => {
    return (
        <>
            <IconButton bg="gray.700" color="white" variant="ghost"
                aria-label="icon"
                icon={icon}
                size="md"
                marginX={mx}
                _hover={{ bg:'gray.700' }}
                _active={{ bg:'gray.700' }} 
                _focus={{ boxShadow:"0 0 1px 2px black, 0 1px 1px rgba(0, 0, 0, .15)" }}
            />
        </>
    )
}

export default IconFooter
