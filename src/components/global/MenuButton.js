import {
    Button,
} from "@chakra-ui/react";

const MenuButton = ({ icon, name }) => {
    return (
        <div>
            <Button 
                _hover={{ bg:'#E0D7D0' }}
                _active={{ bg:'#C8B19C' }} 
                _focus={{ boxShadow:"0 0 1px 2px #9c8067, 0 1px 1px rgba(0, 0, 0, .15)" }}
                width="272px" 
                paddingRight={105} 
                iconSpacing={78} 
                leftIcon={icon} 
                variant="ghost" 
                size="md" 
                marginBottom="5px" 
                marginX="auto"
            >
                {name}
            </Button>
        </div>
    )
}

export default MenuButton
