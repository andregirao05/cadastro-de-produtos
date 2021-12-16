import { apiResolver } from "next/dist/server/api-utils";
import { useContext, createContext, useEffect, useState } from "react";
import { ReactNode } from "react"
import { api } from "../services/Api";
import { Product, ProductResponse, ProductsAllResponse } from "../types/Types"

interface ControlProductsProps{
  createProduct: (name: string, quantity: number) => Promise<Product>;
  deleteProduct: (slug: string) => void;
  getAllProducts: () => Promise<Product[]>;
  modifyNameProduct: (slug: string, name: string) => void;
  modifyQuantityProduct: (slug: string, quantity: number) => void
  searchProduct:(slug: string) => Promise<Product>
}

const ControlProductsContext = createContext<ControlProductsProps>({} as ControlProductsProps)

export function ControlProductsProvider({ children } : { children: ReactNode }) {
  const createProduct = async (name: string, quantity: number) => {
    const { data: { product } } = await api.post<ProductResponse>("/products/create", { name, quantity })
    return product;
  }

  const deleteProduct = async (slug: string) => {
    const productDel = await api.delete(`/products/delete/${slug}`)
    console.log(productDel.data)
  }

  const getAllProducts = async () => {
    const {data:{products: allProducts}} = await api.get<ProductsAllResponse>("products/all")
    return allProducts
  }

  const modifyNameProduct = async (slug: string, name: string) => {
    const response = await api.patch(`products/update-name/${slug}`, {name})
    console.log(response)
  }

  const modifyQuantityProduct = async (slug: string, quantity: number) => {
    const response = await api.patch(`products/update-quantity/${slug}`, {quantity})
    console.log(response)
  }

  const searchProduct = async (slug: string) => {
    const {data:{product}} = await api.get<ProductResponse>(`products/${slug}`)
    return product
  }

  return (
    <ControlProductsContext.Provider 
    value = {{   
      createProduct,
      deleteProduct,
      getAllProducts,
      modifyNameProduct,
      modifyQuantityProduct,
      searchProduct,
    }}
    > 
      {children}
    </ControlProductsContext.Provider>
  )
  
}

export const useProducts = () => useContext(ControlProductsContext);