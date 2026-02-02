// app/api/google/auth/route.ts
import { NextResponse } from "next/server";
import { getGoogleAuthUrl } from "@/lib/googleAuthUrl";

export async function GET() {
  const url = getGoogleAuthUrl();
  return NextResponse.redirect(url);
}


// // app/api/google/auth/route.ts
// import { NextResponse } from "next/server";
// import { getGoogleAuthUrl } from "@/lib/googleAuthUrl";

// export async function GET() {
//   const url = getGoogleAuthUrl();

//   // Logs in terminal
//   console.log("==== Google OAuth URL ====");
//   console.log(url);
//   console.log("=========================");

//   // Instead of redirecting, return the URL
//   return NextResponse.json({ url });
// }