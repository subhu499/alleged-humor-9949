import { Box, Heading, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PaymentWaiting = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [time, setTime] = useState(59)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev)=>prev-1)
            setTimeout(() => navigate("/paymentsuccess"), 6000)
          console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Box align="center" marginTop={{ base: '60px', md: '90px', lg: '56px' }}>
            <Image src={`https://i.ibb.co/${params.img}/upi.png`}></Image>
            <Heading>Open {params.service} mobile app</Heading>
            <Heading>and approve the payment</Heading>
            <Heading>within 4:{time} seconds</Heading>
        </Box>
    )
}

export default PaymentWaiting