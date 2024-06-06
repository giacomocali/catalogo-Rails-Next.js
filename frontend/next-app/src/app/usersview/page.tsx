// VISUALE DEGLI UTENTI
"use client";
import { useState, useEffect } from "react";
import { Header } from "../../components/UserComponents";
import { UserRow } from "../../components/UserComponents";
import { getUsers, removeUser } from "../../ApiActions";

import { loadPageDelayed } from "@/loadPageDelayed";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import "../../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function UsersView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    loadUsers();
  }, []);

  return (
    <>
      <Header />
      <h1 className="my-5 text-center"> Lista utenti </h1>
      <button
        onClick={() => location.reload()}
        className="btn btn-secondary p-2 m-2"
      >
        Aggiorna ⟳
      </button>
      <button
        className="btn btn-success p-2 m-2"
        onClick={() => loadPageDelayed("/adduser", 1000)}
      >
        Aggiungi utente +
      </button>

      <table className="table table-striped table-bordered table-hover rounded-lg shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Cognome</th>
            <th scope="col">Username</th>
            <th scope="col">Data nascita</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow user={user} removeUser={removeUser}/>
          ))}
        </tbody>
      </table>

    </>
  );
}
