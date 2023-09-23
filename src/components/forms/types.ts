import { FormInstance } from "antd";
import { CreateProductsType } from "../../types/ProductsType";

export interface AddProductsFormProps {
  form: FormInstance<any>;
  handleSubmit: (values: CreateProductsType) => Promise<void>;
}
