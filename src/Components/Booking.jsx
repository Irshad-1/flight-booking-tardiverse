import React from 'react';
import { Box, Heading, Select, Input, InputGroup, FormLabel, Button, useToast } from '@chakra-ui/react';

export const Booking = () => {
    const toast = useToast();
    const cities = [
        'Kolkata',
        'Hyderabad',
        'Bengaluru',
        'New Delhi',
        'Jaipur',
        'Chennai',
        'Mumbai',
        'Pune'
    ];
    return (
        <Box width="80%" margin="auto" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="15px">
            <Heading textAlign="center" color="purple"> Flight Booking system</Heading>

            <Box width="50%" margin="50px auto" display="flex">
                <Select placeholder='From'>
                    {cities.map((el) => { return (<option>{el}</option>) })}
                </Select>
                <Select placeholder='To'>
                    {cities.map((el) => { return (<option>{el}</option>) })}
                </Select>
            </Box>

            <Box justifyContent="center" display="flex" margin="30px auto" width="60%" >
                <InputGroup >
                    <FormLabel>Select From Date</FormLabel>
                    <Input type="date" />
                </InputGroup>
                <InputGroup>
                    <FormLabel> Select To Date</FormLabel>
                    <Input type="date" />
                </InputGroup>

            </Box>
            <Button margin="auto" display="block" colorScheme="green" onClick={() =>
                toast({
                    title: 'Tickets Booked',
                    description: "Ticket details have been sent to your email",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            }>Book Tickets</Button>

        </Box>
    )
}
