import { Table } from "antd";
import { ProductsType } from "../types/ProductsType";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text: number) => {
      return `$ ${text}`;
    },
  },
  {
    title: "Total Price",
    dataIndex: "",
    key: "totalPrice",
    render: (_: any, record: ProductsType) => {
      return `$ ${record.stock * record.price}`;
    },
  },
];

export const ProductTable = ({
  dataSource,
}: {
  dataSource: ProductsType[];
}) => {
  return <Table dataSource={dataSource} columns={columns} />;
};
