"use client"
import React, {useState} from 'react'
import axios from 'axios';
import {API_PATH} from "../../../utils/constants";
import {Box, Button} from "@mantine/core";

const Index = () => {
    const [userId, setUserId] = useState(null)
  const [userEmail, setEmail] = useState(null)

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  const handleClick = async () => {
    const body = {
      email: `${getRandomInt(1, 500)}-email@gmail.com`,
      password: '123456'
    }
    const response = await  axios.post(`${API_PATH}/user`, body)

    // @ts-ignore
    if (response && response?.email && response?.id) {
      // @ts-ignore
      setEmail(response?.email  as string)
      // @ts-ignore
      setUserId(response?.id  as string)
    }
    
  }
  
  return (
    <>
      <div>hello from admin dir</div>
      <Button onClick={() => handleClick()}> click me</Button>
      <br/>

      <Box>
        {userId && userEmail && (
          <>
            <div>new user email: {userEmail}</div>
            <div>new use id: {userId}</div>
          </>
        )}
      </Box>
    </>
  )
}

export default Index