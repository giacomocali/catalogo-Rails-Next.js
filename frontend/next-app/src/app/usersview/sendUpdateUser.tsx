"use server"
import { updateUser } from "@/ApiActions";
import { redirect } from "next/navigation";

export async function sendUpdateUser(data: FormData, id) {
    const updatedUser = {
      nome: data.get("nome"),
      cognome: data.get("cognome"),
      username: data.get("username"),
      password: data.get("password"),
      data_nascita: data.get("data_nascita"),
    };
  
    const success = await updateUser(updatedUser, id);
    console.log(success)
    if (success) {
      console.log("AGGIORNATO UTENTE CON SUCCESSO")
      redirect("/usersview")
    }
    else{
      console.error("AGGIORNAMENTO UTENTE FALLITO")
    }
  }