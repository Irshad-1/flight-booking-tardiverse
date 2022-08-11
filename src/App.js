import React from 'react';
import {
  ChakraProvider,
  theme, Modal, ModalContent, ModalOverlay, ModalBody, ModalHeader, Box, FormControl, FormLabel, Input, Button, useDisclosure, InputRightElement,
  InputGroup
} from '@chakra-ui/react';
import { Navbar } from "./Components/Navbar"
import { Booking } from './Components/Booking';


function App() {
  const { isOpen: loginOpen, onOpen: loginOnOpen, onClose: loginOnClose } = useDisclosure();
  const { isOpen: signupOpen, onOpen: signupOnOpen, onClose: signupOnClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const { name, email, password } = data;
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <ChakraProvider theme={theme}>
      <Navbar loginOnOpen={loginOnOpen} signupOnOpen={signupOnOpen} />
      <Booking />
      <Modal isOpen={loginOpen} onClose={loginOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalBody>
            <Box width="70%" margin="100px auto">
              <FormControl padding="20px 0px">
                <FormLabel>Enter email</FormLabel>
                <InputGroup size='md'><Input value={email} onChange={handleChange} type="text" name="email" placeholder="Enter your email" />
                </InputGroup></FormControl>
              <FormControl padding="20px 0px">
                <FormLabel>Enter password</FormLabel>
                <InputGroup size='md'><Input value={password} onChange={handleChange} name="password" type={show ? 'text' : 'password'} placeholder="Enter your password" /><InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
                </InputGroup></FormControl>
              <Button colorScheme="green">LOGIN</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Modal isOpen={signupOpen} onClose={signupOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalBody>
            <Box width="70%" margin="100px auto">
              <FormControl padding="20px 0px">
                <FormLabel>Enter Name</FormLabel>
                <InputGroup size='md'><Input value={name} onChange={handleChange} type="text" name="name" placeholder="Enter your name" />
                </InputGroup></FormControl>
              <FormControl padding="20px 0px">
                <FormLabel>Enter email</FormLabel>
                <InputGroup size='md'><Input value={email} onChange={handleChange} type="text" name="email" placeholder="Enter your email" />
                </InputGroup></FormControl>
              <FormControl padding="20px 0px">
                <FormLabel>Enter password</FormLabel>
                <InputGroup size='md'><Input value={password} onChange={handleChange} name="password" type={show ? 'text' : 'password'} placeholder="Enter your password" />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement></InputGroup></FormControl>
              <Button colorScheme="green">SIGN UP</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}

export default App;
