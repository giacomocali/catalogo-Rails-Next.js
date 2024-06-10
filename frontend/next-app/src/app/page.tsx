"use client";
// SCHERMATA LOGIN
import { checkLogin } from "../ApiActions";
import { useEffect, useState } from "react";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";
import { redirect } from "next/navigation";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../../node_modules/bootstrap-italia/dist/js/bootstrap-italia.min.js";

export default function Home() {
  const [success, setSuccess] = useState(false);
  const [successChanged, setSuccessChanged] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  useEffect(()=>{
    console.log("success status changed")
    setSuccessChanged(true);
  },[success])

  function renderAlert() {
    if (success) {
      return <SuccessAlert body={alertMessage} />;
    } else {
      return <ErrorAlert body={alertMessage} />;
    }
  }

  const handleSubmit = async (formData: FormData) => {
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const result = await checkLogin(data);
    if (result[0] === true) {
      setSuccess(true);
      setAlertMessage(result[1] as string)
      redirect("/usersview");
    } else {
      setSuccess(false);
    }
    setAlertMessage(result[1] as string);
  };

  return (
    <>
      {!successChanged && renderAlert()}
      <div className="d-flex justify-content-center pt-5">
        <form action={handleSubmit} className=" w-50 shadow-lg rounded-5 py-5">
          <h1 className="text-center py-4"> Log in </h1>
          <div className="d-flex justify-content-center ">
            <div className="form-group m-0 pb-3">
              <input
                type="email"
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
