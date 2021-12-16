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

import { RiSendPlane2Line } from "react-icons/ri";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
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
            <Input placeholder="Name" />

            <NumberInput>
              <NumberInputField placeholder="Quantity" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" leftIcon={<RiSendPlane2Line />}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
