export type ModalOpeningType = "create" | "edit";

export type Product = {
  slug: string;
  name: string;
  quantity: number;
};

export type ProductResponse = {
  product: Product;
}

export type ProductsAllResponse = {
  products: Product[];
}
