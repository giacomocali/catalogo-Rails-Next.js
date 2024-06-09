"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logOut() {
  cookies().delete("loggedin");
  redirect("/");
}
