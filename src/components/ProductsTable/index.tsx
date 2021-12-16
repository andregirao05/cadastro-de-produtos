import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Product } from "../../types/Types";
import { ProductRow } from "./ProductRow";

interface ProductsTableProps {
  setName: (name: string) => void;
  setQuantity: (quantity: number) => void
  setSlug: (slug: string) => void
  products: Product[];
}

export function ProductsTable({setName, setQuantity, setSlug, products }: ProductsTableProps) {

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Slug</Th>
          <Th>Name</Th>
          <Th textAlign="center">Quantity</Th>
          <Th textAlign="center">Actions</Th>
        </Tr>
      </Thead>

      <Tbody>
        {products.map((product) => (
          <ProductRow
            setName={setName}
            setQuantity={setQuantity}
            setSlug={setSlug}
            product={product}
            key={product.slug}
          />
        ))}
      </Tbody>
    </Table>
  );
}
