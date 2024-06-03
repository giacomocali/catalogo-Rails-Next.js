"use client"
import { checkLogin } from "./checkLogin";
import { useState } from "react";

export function LoginForm() {
  const [res, setRes] = useState();
  return (
    <div className="d-flex justify-content-center pt-5">
      <form action={checkLogin} className=" w-50 shadow-lg rounded-5 py-4">
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
            <br/> 
            <a href="" className="btn"> Ho dimenticato la password </a>
          </div>
          <button type="submit" className="btn btn-primary rounded-3 mx-3 shadow">
            Log in ↦
          </button>
        </div>
      </form>
    </div>
  );
}
