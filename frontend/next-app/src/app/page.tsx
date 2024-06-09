"use client";
// SCHERMATA LOGIN
import { checkLogin } from "../ApiActions";
import { useEffect, useState } from "react";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";
import { loadPageDelayed } from "@/loadPageDelayed";
import { redirect } from "next/navigation";


import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [successChanged, setSuccessChanged] = useState(false);

  function renderAlert() {
    if (successChanged) {
      if (success) {
        console.log("LOGIN SUCCESS")
        loadPageDelayed("usersview", 1000);
        return <SuccessAlert body="Login effettuato con successo" />;
      }
      return <ErrorAlert body="Credenziali errate." />;
    }
  }
  
  const handleSubmit = async (formData: FormData) => {
    const data = {
      username: formData.get('username'),
      password: formData.get('password')
    }

    const success = await checkLogin(data);
    if(success[0] === true){
      redirect("/usersview");
      setSuccess(true);
    }
    else{
      setSuccess(false);
    }
  };

  return (
    <>
      {renderAlert()}
      <div className="d-flex justify-content-center pt-5">
        <form
          action={handleSubmit}
          className=" w-50 shadow-lg rounded-5 py-4"
        >
          <h1 className="text-center py-4"> Log in </h1>
          <div className="d-flex justify-content-center ">
            <div className="form-group m-0 pb-3">
              <input
                type="text"
                name="username"
                className="form-control rounded-3 mb-2 shadow-sm"
                id="formGroupExampleInput2"
                placeholder="Username..."
                required
              />
              <input
                type="password"
                name="password"
                className="form-control rounded-3 shadow-sm"
                id="formGroupExampleInput2"
                placeholder="Password..."
                required
              />
              <br />
              <a href="" className="btn">
                Ho dimenticato la password
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-3 mx-4 p-3 shadow"
            >
              Accedi ↦
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
