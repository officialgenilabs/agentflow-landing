import { NextRequest, NextResponse } from "next/server";
import { VOICE_BETA_COOKIE } from "@/lib/voice-beta-auth";

export function POST(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/voice-beta", request.url), 303);
  response.cookies.set(VOICE_BETA_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/voice-beta",
    maxAge: 0,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
