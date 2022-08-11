import React from 'react';
import { Box, Button } from '@chakra-ui/react';

export const Navbar = (props) => {
    return (
        <Box display="flex" justifyContent="flex-end" backgroundImage="url('https://png.pngtree.com/background/20210709/original/pngtree-aircraft-star-love-hand-painted-picture-image_921563.jpg')" >
            <Box display="flex" justifyContent="space-between" width="15%" margin="40px" >
                <Button colorScheme="purple" onClick={props.loginOnOpen}>LOGIN</Button>
                <Button colorScheme="purple" onClick={props.signupOnOpen}>SIGN UP</Button>
            </Box>
        </Box>
    )
}
