import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Product } from "../../types/Types";
import { ProductRow } from "./ProductRow";

export function ProductsTable({ onOpenModal }: { onOpenModal: () => void }) {
  const products: Product[] = [
    {
      slug: "azeite-de-oliva",
      name: "Azeite de Oliva",
      quantity: 195,
    },
    {
      slug: "pao-integral",
      name: "Pão integral",
      quantity: 1874,
    },
    {
      slug: "margarina-deline",
      name: "Margarina Deline",
      quantity: 154,
    },
  ];

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
            onOpenModal={onOpenModal}
            product={product}
            key={product.slug}
          />
        ))}
      </Tbody>
    </Table>
  );
}
