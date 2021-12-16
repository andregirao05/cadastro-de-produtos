import { Td, Tr, Button, Center } from "@chakra-ui/react";
import { Product } from "../../types/Types";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";

interface ProductRowProps {
  setName: (name: string) => void;
  setQuantity: (quantity: number) => void
  setSlug: (slug: string) => void
  product: Product;
}

export function ProductRow({ setName, setQuantity, setSlug, product }: ProductRowProps) {
  
  const handleOnClick = () => {
    setName(product.name);
    setQuantity(product.quantity);
    setSlug(product.slug)
  }
  
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
            onClick={ handleOnClick }
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
