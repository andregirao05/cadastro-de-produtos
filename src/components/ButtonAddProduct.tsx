import { Button, useDisclosure } from "@chakra-ui/react";

export function ButtonAddProduct({ onOpenModal }: { onOpenModal: (type: string) => void }) {
  return (
    <Button colorScheme="blue" onClick={() => onOpenModal("create")}>
      New Product
    </Button>
  );
}
