import { updateProduct } from "@/ApiActions";
import axios from "axios";
import { redirect } from "next/navigation";

export async function sendUpdateProduct(data:FormData, id){
    const updatedProduct = {
        nome_oggetto: data.get("nome_oggetto"),
        descrizione: data.get("descrizione"),
        tipo_prodotto_id: data.get("tipo_prodotto_id"),
    };

    const success = await updateProduct(updatedProduct, id);
    console.log(success);
    if(success){
        console.log("AGGIORNATO PRODOTTO CON SUCCESSO")
        redirect("/productsview")
    }
    else{
        console.error("AGGIORNAMENTO PRODOTTO FALLITO")
    }
}