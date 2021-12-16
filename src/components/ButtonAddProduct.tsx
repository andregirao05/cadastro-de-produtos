import { Button, useDisclosure } from "@chakra-ui/react";

export function ButtonAddProduct({ onOpen }: { onOpen: () => void }) {
  return (
    <Button colorScheme="blue" onClick={onOpen}>
      New Product
    </Button>
  );
}
