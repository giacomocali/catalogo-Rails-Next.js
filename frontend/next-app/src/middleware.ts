import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

console.log("MIDDLEWARE STA GIRANDO");

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;

  console.log(cookies().getAll());

  console.log("CHECKING URL: " + url);
  if (!verify && containsProtectedUrl(url)) {
    return NextResponse.redirect("http://localhost:3001/");
  }
}

function containsProtectedUrl(requestUrl): boolean {
  if (
    requestUrl.includes("http://localhost:3001/usersview") ||
    requestUrl.includes("http://localhost:3001/productsview") ||
    requestUrl.includes("http://localhost:3001/adduser") ||
    requestUrl.includes("http://localhost:3001/addproduct")
  ) {
    return true;
  }else{
    return false;
  }
}
