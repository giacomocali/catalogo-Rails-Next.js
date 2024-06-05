// VISUALE DEI PRODOTTI
"use client"
import { useState, useEffect } from "react";
import { Header } from "../../components/ProductsHeader";
import { ProductRow } from "@/components/ProductRow";
import { getProducts } from "../../ApiActions";

import "../../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function ProductsView () {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const loadProducts = async ()=>{
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  },[])

  return (
    <>
      <Header />
      <h1 className="my-5 text-center"> Lista utenti </h1>
      <table className="table table-striped table-bordered table-hover rounded-lg shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">ID tipo prodotto</th>
            <th scope="col">Nome oggetto</th>
            <th scope="col">Descrizione</th>
            <th scope="col">Creato in data:</th>
            <th scope="col">Aggiornato in data:</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>(
            <ProductRow product={product}/>
          ))}
        </tbody>
      </table>
    </>
  );
}
