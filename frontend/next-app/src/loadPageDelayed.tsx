"use server";
import { redirect } from "next/navigation";

export async function loadPageDelayed(url, delay) {
  console.warn("REDIRECTING TO: " + url);
  setTimeout(redirect(url), delay);
}
