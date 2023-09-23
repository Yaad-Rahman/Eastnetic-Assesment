import { useMutation, useQuery } from "@apollo/client";
import { CreateProductsType, ProductsType } from "../types/ProductsType";
import {
  CreateProductQuery,
  GetProductsQuery,
  countQuery,
} from "../queries/ProductsQuery";
import { useState } from "react";
import { Form, message } from "antd";

export const useProducts = () => {
  //states
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //antd message
  const [messageApi, contextHolder] = message.useMessage();

  //graphql queries data fetch
  const { data } = useQuery(countQuery);
  const { data: ProductsData, error: ProductsError } = useQuery<{
    products: ProductsType[];
  }>(GetProductsQuery);
  const [createProduct] = useMutation(CreateProductQuery, {
    refetchQueries: [{ query: GetProductsQuery }, { query: countQuery }],
  });

  //modal funcs
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //add product form
  const [form] = Form.useForm();

  const handleSubmitCreateProduct = async (values: CreateProductsType) => {
    try {
      const response = await createProduct({
        variables: {
          ...values,
        },
      });

      if (!response.errors) {
        messageApi.success("Product created!");
        handleCancel();
      }
    } catch (error) {
      console.error("Product create error", error);
    }
  };

  return {
    contextHolder,
    data,
    ProductsData,
    ProductsError,
    isModalOpen,
    showModal,
    handleOk,
    handleCancel,
    handleSubmitCreateProduct,
    form,
  };
};
