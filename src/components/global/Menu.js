import React from 'react';
import { MenuButton } from './../';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    IconButton,
    useDisclosure,
    Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
    FaBars, FaHome, FaShoppingBag, FaPhoneAlt
} from "react-icons/fa";

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <IconButton aria-label="Menu" icon={<FaBars />} onClick={onOpen} />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg="#E4E1D6">
                <DrawerHeader borderBottomWidth="1px">
                    <Image src="/img/branding/kayana-logo.png" alt="Kayana Studio" />
                </DrawerHeader>
                <DrawerBody>
                    <Link to="/">
                        <MenuButton name="&nbsp;Home&nbsp;" icon={<FaHome />} />
                    </Link>
                    <Link to="/shop">
                        <MenuButton name="&nbsp;&nbsp;Shop&nbsp;&nbsp;" icon={<FaShoppingBag />} />
                    </Link>
                    <Link to="/contact">
                        <MenuButton name="Contact" icon={<FaPhoneAlt />} />
                    </Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
    )
}

export default Menu
