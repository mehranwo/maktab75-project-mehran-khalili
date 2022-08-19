import * as React from "react";
import ProductTable from "./ProductTable";
import StockTable from "./StockTable";
import OrderTable from './OrderTable'

export default function HandleTable({ rows = [],getAllData,  type , count }) {

  return (
    <>
    {type === "Product" && <ProductTable getAllData={getAllData} rows={rows} count={count}/>}
    {type === "Stock" && <StockTable getAllData={getAllData} rows={rows}/>}
    {type === "Order" && <OrderTable getAllData={getAllData} rows={rows}/>}
    </>
  );
}
