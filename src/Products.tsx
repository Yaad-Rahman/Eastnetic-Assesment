import Statistic from "antd/es/statistic/Statistic";
import { ProductTable } from "./components";

import { Alert, Button, Row } from "antd";
import { DEFAULT_ERROR_MESSAGE } from "./constants";

import { useProducts } from "./hooks/useProducts";
import { AddProductModal } from "./components/modals/AddProductModal";

export function Products(): JSX.Element {
  const {
    contextHolder,
    data,
    ProductsData,
    ProductsError,
    isModalOpen,
    handleOk,
    handleCancel,
    showModal,
    form,
    handleSubmitCreateProduct,
  } = useProducts();

  if (ProductsError)
    return (
      <Alert
        message={DEFAULT_ERROR_MESSAGE}
        description={ProductsError.message}
        type="error"
        showIcon
      />
    );

  return (
    <div>
      {contextHolder}
      <Statistic
        title="Total products"
        value={data?.products_aggregate?.aggregate.count}
      />

      <Row style={{ marginBottom: 10 }} justify="end">
        <Button type="primary" onClick={() => showModal()}>
          Add Product
        </Button>
      </Row>

      <ProductTable
        dataSource={
          ProductsData?.products.map((product) => ({
            ...product,
            key: product.id,
          })) ?? []
        }
      />

      {/* add product modal  */}
      <AddProductModal
        form={form}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        handleSubmitCreateProduct={handleSubmitCreateProduct}
      />
    </div>
  );
}
