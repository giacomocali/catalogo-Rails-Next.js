// VISUALE DEI PRODOTTI
"use client";
import { useState, useEffect, Suspense } from "react";
import { Header } from "../../components/ProductComponents";
import { ProductRow } from "@/components/ProductComponents";
import { getProducts } from "../../ApiActions";
import { YesNoModal } from "@/components/Modals";

import "../../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <h1 className="my-5 text-center"> Lista prodotti </h1>
      <button onClick={()=>location.reload()} className="btn btn-secondary p-2 m-2"> Aggiorna ⟳ </button>
      <table className="table table-striped table-bordered table-hover rounded-lg shadow">
        <thead className="shadow-sm">
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
            {products.map((product) => (
              <ProductRow product={product} />
            ))}
        </tbody>
      </table>
      
    </>
  );
}
