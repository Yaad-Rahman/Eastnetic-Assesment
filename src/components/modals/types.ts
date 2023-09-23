import { CreateProductsType } from "../../types/ProductsType";
import { AddProductsFormProps } from "../forms/types";

export interface AddProductModalProps {
  isModalOpen: boolean;
  handleOk: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleCancel: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  form: AddProductsFormProps["form"];
  handleSubmitCreateProduct: (values: CreateProductsType) => Promise<void>;
}
