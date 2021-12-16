import { Td, Tr, Button, Center } from "@chakra-ui/react";
import { Product } from "../../types/Types";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface ProductRowProps {
  product: Product;
  onOpenModal: () => void;
}

export function ProductRow({ product, onOpenModal }: ProductRowProps) {
  return (
    <Tr>
      <Td>{product.slug}</Td>
      <Td>{product.name}</Td>
      <Td textAlign="center">{product.quantity}</Td>
      <Td>
        <Center gridGap="8px">
          <Button
            variant="outline"
            colorScheme="green"
            leftIcon={<BiEditAlt />}
            onClick={onOpenModal}
          >
            Edit
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            leftIcon={<MdOutlineDeleteOutline />}
          >
            Delete
          </Button>
        </Center>
      </Td>
    </Tr>
  );
}
