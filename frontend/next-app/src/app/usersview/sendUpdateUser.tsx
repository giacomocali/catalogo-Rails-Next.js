"use server";
import { updateUser } from "@/ApiActions";
import { redirect } from "next/navigation";

function passwordCheck(pass: string) {
  const regex = /^(?=.*[A-Z])(?=.*[@!()-_+:<>])(?=.{8,})/;
  return regex.test(pass);
}

export async function sendUpdateUser(data: FormData, id) {
  const updatedUser = {
    nome: data.get("nome"),
    cognome: data.get("cognome"),
    username: data.get("username"),
    password: data.get("password"),
    data_nascita: data.get("data_nascita"),
  };
  if(!passwordCheck){return;}

  const success = await updateUser(updatedUser, id);
  console.log(success);
  if (success) {
    console.log("AGGIORNATO UTENTE CON SUCCESSO");
    redirect("/usersview");
  } else {
    console.error("AGGIORNAMENTO UTENTE FALLITO");
  }
}
