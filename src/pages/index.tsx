import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { ButtonAddProduct } from "../components/ButtonAddProduct";
import { FullPage } from "../components/FullPage";
import { ProductsTable } from "../components/ProductsTable";
import { RegistrationModal } from "../components/RegistrationModal";

export default function Home() {
  const {
    isOpen: modalIsOpen,
    onClose: onCloseModal,
    onOpen: onOpenModal,
  } = useDisclosure();

  return (
    <FullPage>
      <Flex w="1400px" flexDir="column" gridGap="24px">
        <Heading>Products Registration</Heading>
        <ProductsTable onOpenModal={onOpenModal} />
        <ButtonAddProduct onOpen={onOpenModal} />
      </Flex>

      <RegistrationModal
        isOpen={modalIsOpen}
        onClose={onCloseModal}
        onOpen={onOpenModal}
      />
    </FullPage>
  );
}
