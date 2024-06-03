"use server";
import axios from "axios";

interface ApiResponse {
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

export async function checkLogin(formData: FormData) {
  const providedUsername = formData.get("username")?.valueOf();
  const providedPassword = formData.get("password")?.valueOf();
  try {
    const response : ApiResponse = await axios.get(
      `http://localhost:3000/api/v1/utenti/show_by_username/${providedUsername}`
    );
    console.log("==================")
    const { data } = response;
    if(providedPassword === data.password){
      console.log("PASSWORD CHECK: OK");
    }else{
      console.log("PASSWORD CHECK: FAILED")
    }

  } catch (err) {
    console.error("ERROR FETCHING RESPONSE!");
    console.error(err);
  }
}
