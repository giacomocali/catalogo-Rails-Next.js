"use server";

import axios, { AxiosResponse } from "axios";
import { cookies, headers } from "next/headers";
import { loadPageDelayed } from "./loadPageDelayed";

function getToken() {
  return localStorage.getItem("token");
}

export async function checkLogin(body) {
  const providedUsername = body.username;
  const providedPassword = body.password;

  const address = `http://localhost:3000/api/v1/sessions/create?username=${providedUsername}&password=${providedPassword}`;
  try {
    const response = await axios.post(address, {
      providedUsername,
      providedPassword,
    });
    const data = response.data;
    localStorage.setItem("token", data.token);
  } catch (err) {
    console.error("Errore nel login: ", err.response.data.error);
    throw new Error(err.response.data.error);
  }
}

export async function getUsers() {
  const token = getToken();

  try {
    const users = await axios.get("http://localhost:3000/api/v1/utenti", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return users.data;
  } catch (error) {
    console.error(
      "Errore cercando di ottenere gli utenti:" + error.response.data.error
    );
    throw new Error(error.response.data.error);
  }
}

export async function removeUser(id) {
  const token = getToken();
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/utenti/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.error(err);
  }
}

export async function createUser(body) {
  const token = getToken();
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/utenti/",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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
  const token = getToken();
  try {
    const products = await axios.get("http://localhost:3000/api/v1/prodotto/", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const data = products.data;
    return data;
  } catch (error) {
    console.error("Errore cercando di ottenere i prodotti:" + error);
    return [];
  }
}

export async function createProduct(body) {
  const token = getToken();
  try {
    const response = axios.post(`http://localhost:3000/api/v1/prodotto`, body, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return true;
  } catch (err) {
    return false;
  }
}

export async function updateUser(body, id) {
  const token = getToken();
  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/utenti/${id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function updateProduct(body, id) {
  const token = getToken();
  try {
    console.log(body);
    console.log(id);
    const response = axios.put(
      `http://localhost:3000/api/v1/prodotto/${id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function removeProduct(id) {
  const token = getToken();
  try {
    const response = axios.delete(
      `http://localhost:3000/api/v1/prodotto/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
}
