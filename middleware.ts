import { NextRequest, NextResponse } from "next/server";
import { AuthConstants } from "@/lib/auth";
import { jwtVerify } from "jose";

function getSecretKey(): Uint8Array {
  const secret = process.env.ADMIN_SECRET || "dev-secret-change-me";
  return new TextEncoder().encode(secret);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow access to the login page without a session
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(AuthConstants.SESSION_COOKIE_NAME)?.value;
  if (!token) {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  try {
    await jwtVerify(token, getSecretKey());
    return NextResponse.next();
  } catch {
    const url = new URL("/admin/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};