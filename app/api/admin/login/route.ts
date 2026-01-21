import { NextResponse } from "next/server";
import { createSessionCookie, isValidAdminCredentials, setSessionCookie } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const username = String(data?.username || "").trim();
    const password = String(data?.password || "").trim();

    if (!username || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    if (!isValidAdminCredentials(username, password)) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createSessionCookie({ username });
    const res = NextResponse.json({ ok: true });
    // Also set via NextResponse cookies to ensure it's returned in this response
    res.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });
    // And set using server cookies API for subsequent handlers
    await setSessionCookie(token);
    return res;
  } catch (e) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}



