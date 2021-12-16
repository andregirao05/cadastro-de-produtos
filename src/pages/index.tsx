import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { ButtonAddProduct } from "../components/ButtonAddProduct";
import { FullPage } from "../components/FullPage";
import { InputsData } from "../components/InputsData";
import { ProductsTable } from "../components/ProductsTable";
import { RegistrationModal } from "../components/RegistrationModal";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/Types";


export default function Home() {
  const [products, setProducts] = useState<Product[]>([] as Product[])
  const [name, setName] = useState<string>("")
  const [quantity, setQuantity] = useState<number>(0)
  const [slug, setSlug] = useState("")

  console.log(slug)

  const {getAllProducts} = useProducts()

  useEffect(()=>{
    async function getArrayProducts(){
      const AllProducts = await getAllProducts()
      setProducts(AllProducts)
    }
    getArrayProducts()
  },[]) 

  return (
    <FullPage>
      <Flex w="1400px" flexDir="column" gridGap="24px">
        <Heading>Products Registration</Heading>
        <InputsData name={name} setName={setName} quantity={quantity} setQuantity={setQuantity} />
        <ProductsTable setName={setName} setQuantity={setQuantity} setSlug={setSlug} products={products} />
      </Flex>

    </FullPage>
  );
}
