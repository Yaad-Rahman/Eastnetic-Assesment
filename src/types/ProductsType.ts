export interface ProductsType {
  __typename: string;
  id: number;
  name: string;
  price: number;
  stock: number;
}

export interface CreateProductsType
  extends Omit<ProductsType, "id" | "__typename"> {
  description: string;
}
