// FUNZIONI PER CHIAMARE L'API DI RAILS
"use server";

import axios, { AxiosResponse } from "axios";
import { URL } from "url";

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

interface createdUser {
  data: {
    username: string;
    password: string;
    nome: string;
    cognome: string;
    data_nascita: string;
  };
}

export async function checkLogin(formData: FormData) {
  var providedUsername: string =
    formData.get("username")?.valueOf().toString() ?? " ";

  const providedPassword: string =
    formData.get("password")?.valueOf().toString() ?? " ";

  // providedUsername = encodeURIComponent(providedUsername);

  const address = `http://localhost:3000/api/v1/utenti/show?username=${providedUsername}`;
  console.log(providedUsername);

  try {
    const response: selectedUser = await axios.get(address);
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

export async function getUsers() {
  try {
    const users = await axios.get("http://localhost:3000/api/v1/utenti");
    const data = users.data;
    return data;
  } catch (error) {
    console.error("Errore cercando di ottenere gli utenti:" + error);
    return [];
  }
}

export async function removeUser(id) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/utenti/${id}`
    );
  } catch (err) {
    console.error(err);
  }
}

export async function updateUser(body, id) {
  
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/utenti/${id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function createUser(body) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/utenti/",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getProducts() {
  try {
    const products = await axios.get("http://localhost:3000/api/v1/prodotto/");
    const data = products.data;
    return data;
  } catch (error) {
    console.error("Errore cercando di ottenere i prodotti:" + error);
    return [];
  }
}


export async function createProduct(body) {
  try {
    const response = axios.post(`http://localhost:3000/api/v1/prodotto`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return true;
  } catch (err) {
    return false;
  }
}

export async function updateProduct(body, id){
  try{
    const response = axios.put(`http://localhost:3000/api/v1/prodotto/${id}`, body,
    {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return true;
  }
  catch(error){
    console.error(error);
  }
}

export async function removeProduct(id){
  try{
    const response = axios.delete(`http://localhost:3000/api/v1/prodotto/${id}`)
  }
  catch(error){
    console.error(error);
  }
}

function businessLogicChecks(k: any): boolean {
  if (k === "" || k === " " || k === null || k === undefined) {
    return false;
  }
  return true;
}
