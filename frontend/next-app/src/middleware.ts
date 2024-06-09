import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

console.log("MIDDLEWARE STA GIRANDO");

export default function middleware(req) {
  let verify = req.cookies.get("loggedin");
  let url = req.url;
  let protectedUrls = [
    "http://localhost:3001/usersview",
    "http://localhost:3001/productsview",
    "http://localhost:3001/adduser",
    "http://localhost:3001/addproduct",
  ];

  console.log(cookies().getAll());

  console.log("CHECKING URL: " + url);
  if (
    (!verify && url.includes(protectedUrls[0])) ||
    url.includes(
      protectedUrls[1] ||
        url.includes(protectedUrls[2] || url.includes(protectedUrls[3]))
    )
  ) {
    return NextResponse.redirect("http://localhost:3001/");
  }
}

function included(s: string, wordsToSearch: Array<string>) {
  wordsToSearch.forEach((word) => {
    console.warn("cicle");
    if (s.includes(word)) {
      console.warn("LA RICHIESTA INCLUDE UN URL PROTETTO");
      return true;
    }
  });
  console.warn("LA RICHIESTA NON INCLUDE UN URL PROTETTO");
  return false;
}
