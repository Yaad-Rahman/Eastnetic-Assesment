import { Modal } from "antd";
import { AddProductsForm } from "../forms/AddProductsForm";
import { AddProductModalProps } from "./types";

export const AddProductModal = ({
  isModalOpen,
  handleOk,
  handleCancel,
  form,
  handleSubmitCreateProduct,
}: AddProductModalProps) => {
  return (
    <Modal
      title="Add Product"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <AddProductsForm handleSubmit={handleSubmitCreateProduct} form={form} />
    </Modal>
  );
};
