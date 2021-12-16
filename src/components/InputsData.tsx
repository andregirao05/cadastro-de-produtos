import { Button, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import { useProducts } from "../hooks/useProducts";

interface InputsDataProps {
  name: string;
  setName: (name: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void
}

export function InputsData({name, setName, quantity, setQuantity}: InputsDataProps) {
  const { createProduct, modifyNameProduct, modifyQuantityProduct } = useProducts()
  
  
  return (
    <Flex w="100%" flexDir="column" gridGap="8px">
      <Input value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />

      <NumberInput value={quantity} onChange={(stringValue)=>setQuantity(Number(stringValue))}  >
        <NumberInputField  placeholder="Quantity" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Button colorScheme="blue" leftIcon={<RiSendPlane2Line />} >
        Submit
      </Button>
    </Flex>
  )
}