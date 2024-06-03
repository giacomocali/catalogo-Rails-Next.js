"use client";
import { checkLogin } from "./checkLogin";
import { useState, useEffect } from "react";
import { SuccessAlert, ErrorAlert } from "../components/Alerts";
import { loadPageDelayed } from "@/components/loadPageDelayed";
// export function renderAlert(success: boolean) {
  //   setSuccess(success);
  // }
  

  
  export function LoginForm() {
  const [success, setSuccess] = useState(false);
  const [successChanged, setSuccessChanged] = useState(false);

  function renderAlert(){
    if(successChanged){
      if(success) {
        loadPageDelayed("user_list", 10);
        return <SuccessAlert body={"Success"}/>;
      }
      return <ErrorAlert body="Credenziali errate."/>
    }
  }
  
  async function handleSubmit(formData: FormData){
    const result : boolean | undefined = await checkLogin(formData);
    if(result != null && result != undefined && typeof result === 'boolean'){
        setSuccess(result);
        setSuccessChanged(true);
    }
  }
  
  return (
    <>
    {renderAlert()}
      <div className="d-flex justify-content-center pt-5">
        <form action={fd=> handleSubmit(fd)} className=" w-50 shadow-lg rounded-5 py-4">
          <h1 className="text-center py-4"> Log in </h1>
          <div className="d-flex justify-content-center ">
            <div className="form-group m-0 pb-3">
              <input
                type="text"
                name="username"
                className="form-control rounded-3 mb-2 shadow-sm"
                id="formGroupExampleInput2"
                placeholder="Username..."
              />
              <input
                type="password"
                name="password"
                className="form-control rounded-3 shadow-sm"
                id="formGroupExampleInput2"
                placeholder="Password..."
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
