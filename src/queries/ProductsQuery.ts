import { gql } from "@apollo/client";

export const countQuery = gql`
  query CountQuery {
    products_aggregate {
      aggregate {
        count
      }
    }
  }
`;

export const GetProductsQuery = gql`
  query GetProductsQuery {
    products {
      id
      name
      price
      stock
    }
  }
`;

export const CreateProductQuery = gql`
  mutation CreateProduct(
    $name: String!
    $description: String!
    $stock: Int!
    $price: numeric!
  ) {
    insert_products(
      objects: {
        name: $name
        description: $description
        stock: $stock
        price: $price
      }
    ) {
      affected_rows
    }
  }
`;
