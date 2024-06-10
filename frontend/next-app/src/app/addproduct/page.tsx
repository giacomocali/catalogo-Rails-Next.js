// INTERFACCIA DI AGGIUNTA PRODOTTI
import { Header } from "@/components/ProductComponents";
import { createProduct } from "@/ApiActions";
import { redirect } from "next/navigation";

async function sendCreateProduct(data: FormData) {
  "use server";
  const productToSend = {
    nome_oggetto: data.get("nome_oggetto"),
    descrizione: data.get("descrizione"),
    tipo_prodotto_id: data.get("tipo_prodotto_id"),
  };
  
  const success: boolean = await createProduct(productToSend);
  if (success) {
    redirect("/productsview");
  } else {
    console.error("CREAZIONE UTENTE FALLITA");
  }
  // implementare alert di bootstrap per dare migliore feedback dell'esito all'utente
}

export default function Home() {
  return (
    <>
      <Header />

      <div className="d-flex justify-content-center mt-5">

        <form action={sendCreateProduct} className="mw-50 shadow p-4 rounded-4">
          <h5 className="text-center my-4">
            Inserisci i dati del nuovo prodotto:
          </h5>
          <div className="form-group">
            <AddProductInput
              type={"text"}
              identifier={"nome_oggetto"}
              label={"Nome oggetto..."}
            />
            <AddProductInput
              type={"text"}
              identifier={"descrizione"}
              label={"Descrizione..."}
            />
            <AddProductInput type={"number"} identifier={"tipo_prodotto_id"} label={"Id tipo prodotto:"} />
          </div>
          <button type="submit" className="btn btn-primary mx-2 rounded-3">
            Invia
          </button>
          <a
            type="button"
            className="btn btn-secondary mx-2 rounded-3"
            href="/productsview"
          >
            Indietro
          </a>
        </form>
      </div>
    </>
  );
}

function AddProductInput({ type, identifier, label }) {
  return (
    <div className="mb-4">
      <p className="m-0 p-0"> {label} </p>
      <input
        type={type}
        id={identifier}
        name={identifier}
        placeholder={label}
        className="form-control shadow-sm rounded-3"
      />
    </div>
  );
}
