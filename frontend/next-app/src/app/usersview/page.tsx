// VISUALE DEGLI UTENTI
"use client";
import { useState, useEffect } from "react";
import { Header } from "../../components/UserComponents";
import { UserRow } from "../../components/UserComponents";
import { getUsers, removeUser } from "../../ApiActions";
import { editUserForm } from "../../components/UserComponents";

import { loadPageDelayed } from "@/loadPageDelayed";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function UsersView() {
  const [users, setUsers] = useState([]);
  const [showEditUser, setShowEditUser] = useState(false);
  useEffect(() => {
    const loadUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };
    loadUsers();
  }, []);

  function changeShowEditUser(val:boolean){
    setShowEditUser(val);
  }


  useEffect(() => {
    console.log("showEditUser value changed: " + showEditUser);
  }, [showEditUser]);

  return (
    <>
      <Header />
      <h1 className="my-5 text-center"> Lista utenti </h1>
      <button
        onClick={() => location.reload()}
        className="btn btn-secondary p-2 m-2 rounded-3"
      >
        Aggiorna ⟳
      </button>
      
      <button
        className="btn btn-success p-2 m-2 rounded-3"
        onClick={() => loadPageDelayed("/adduser", 1000)}
      >
        Aggiungi utente +
      </button>

      {showEditUser && editUserForm(changeShowEditUser)}

      <table className="table table-striped table-bordered table-hover shadow">
        <thead className="shadow-sm">
          <tr>
            <th scope="col" key={"id"}>ID</th>
            <th scope="col" key={"nome"}>Nome</th>
            <th scope="col" key={"cognome"}>Cognome</th>
            <th scope="col" key={"username"}>Username</th>
            <th scope="col" key={"password"}>Password</th>
            <th scope="col" key={"data_nascita"}>Data nascita</th>
            <th scope="col" key={"aggiornato"}>Aggiornato</th>
            <th scope="col" key={"creato"}>Creato</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              user={user}
              removeUser={removeUser}
              f={changeShowEditUser}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
