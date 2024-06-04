"use server";
import axios, { AxiosResponse } from "axios";
// import { renderAlert } from "./LoginForm";

interface selectedUser {
  data: {
    id: number;
    username: string;
    password: string;
    nome: string;
    cognome: string;
    data_nascita: string;
    created_at: string;
    updated_at: string;
  };
}

// interface users{
//   []
// }

export async function checkLogin(formData: FormData) {
  const providedUsername = formData.get("username")?.valueOf();
  const providedPassword = formData.get("password")?.valueOf();
  try {
    const response: selectedUser = await axios.get(
      `http://localhost:3000/api/v1/utenti/show_by_username/${providedUsername}`
    );
    console.log("==================");
    const { data } = response;
    var passwordOk: boolean = providedPassword === data.password;
    return passwordOk;
  } catch (err) {
    console.error("ERRORE! Qualcosa è andato storto chiamando l'API");
    console.error(err);
    return false;
  }
}

export async function fetchUsers() {
  try {
    const usersList: AxiosResponse<any> = await axios.get(
      "http://localhost:3000/api/v1/utenti"
    );
    const conv: any[] = usersList.data;
    return conv;
  } 
  catch (error) {
    return error;
  }
}
