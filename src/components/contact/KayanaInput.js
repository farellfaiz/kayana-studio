import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"


const KayanaInput = ({ icon, type, placeholder, margin, name }) => {
    return (
        <>
            <InputGroup margin={margin}>
                <InputLeftElement children={icon} />
                <Input bg="white" type={type} placeholder={placeholder} name={name} width="100%" />
            </InputGroup>
        </>
    )
}

KayanaInput.defaultProps = {
    margin: 3
}

export default KayanaInput
