import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiSendPlane2Line } from "react-icons/ri";
import { useProducts } from "../hooks/useProducts";


interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeOfModalOpenig: "create" | "edit";
}

export function RegistrationModal({ isOpen, onClose, typeOfModalOpenig }: RegistrationModalProps) {
  
  const { createProduct, modifyNameProduct, modifyQuantityProduct } = useProducts()
  const [name, setName] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
    
  function ChooseModal(type : 'create' | 'edit'){
    if (type === 'create'){
      createProduct(name, quantity)
    }else{
      
    }
  } 

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay onClick={onClose} />

      <ModalContent>
        <ModalHeader>
          <Heading>Product Registration</Heading>
          <ModalCloseButton />
        </ModalHeader>

        <ModalBody>
          <Flex flexDir="column" gridGap="8px">
            <Input value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} />

            <NumberInput value={quantity} onChange={(stringValue)=>setQuantity(Number(stringValue))}  >
              <NumberInputField  placeholder="Quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" leftIcon={<RiSendPlane2Line />} >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
