// INTERFACCIA DI AGGIORNAMENTO UTENTI
"use client";
import { Header } from "@/components/UserComponents";
import { sendUpdateUser } from "./sendUpdateUser";
import { useState } from "react";

interface userData {
  username: string;
  password: string;
  nome: string;
  cognome: string;
  data_nascita: string;
}

export var user: userData ={
    username: "",
    password: "",
    nome: "",
    cognome: "",
    data_nascita: ""
}
export function setUser(data: userData) {
  user = data;
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center mt-5">
        <form action={sendUpdateUser} className="mw-50 shadow p-4 rounded-4">
          <h5 className="text-center my-4">Aggiorna i dati dell'utente:</h5>
          <div className="form-group">
            <UpdateUserInput
              type={"text"}
              identifier={"username"}
              label={"Username"}
              value={user.username}
            />
            <UpdateUserInput
              type={"password"}
              identifier={"password"}
              label={"Password"}
              value={user.password}
            />
            <UpdateUserInput
              type={"text"}
              identifier={"nome"}
              label={"Nome"}
              value={user.nome}
            />
            <UpdateUserInput
              type={"text"}
              identifier={"cognome"}
              label={"Cognome"}
              value={user.cognome}
            />
            <UpdateUserInput
              type={"date"}
              identifier={"data_nascita"}
              label={"Data di nascita"}
              value={user.data_nascita}
            />
          </div>
          <button type="submit" className="btn btn-primary mx-2 rounded-3">
            Invia
          </button>
          <a
            type="button"
            className="btn btn-secondary mx-2 rounded-3"
            href="/usersview"
          >
            Indietro
          </a>
        </form>
      </div>
    </>
  );
}

export function UpdateUserInput({ type, identifier, label, value }) {
  return (
    <div className="mb-4">
      <p className="m-0 p-0"> {label} </p>
      <input
        type={type}
        id={identifier}
        name={identifier}
        value={value}
        className="form-control shadow-sm rounded-3"
      />
    </div>
  );
}
