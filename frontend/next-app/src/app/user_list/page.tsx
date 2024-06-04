import { Header } from "@/components/Header";
import { useState, useEffect } from "react";
import { UserRow } from "@/components/UserRow";
import { fetchUsers } from "../UserActions";
import "../../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default async function Home() {
  const users = await fetchUsers();
  return (
    <>
      <Header />
      <h1 className="my-3 text-center"> Lista utenti </h1>
      <table className="table table-striped table-hover">
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
          {
            users.map((user)=>{
              return <UserRow {...user}/>
              }
            )
          }
        </tbody>
      </table>
    </>
  );
}
