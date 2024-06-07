"use server"
import { updateUser } from "@/ApiActions";
import { redirect } from "next/navigation";

export async function sendUpdateUser(data: FormData) {
    "use server";
    const userToSend = {
      nome: data.get("nome"),
      cognome: data.get("cognome"),
      username: data.get("username"),
      password: data.get("password"),
      data_nascita: data.get("data_nascita"),
    };
  
    const success: boolean = await updateUser(userToSend);
    if (success) {
      redirect("usersview");
    } else {
      console.error("MODIFICA UTENTE FALLITA");
    }
    // implementare alert di bootstrap per dare migliore feedback dell'esito all'utente
  }