import { NextRequest, NextResponse } from "next/server";
import {
  isValidFounderPass,
  VOICE_BETA_COOKIE,
  VOICE_BETA_SESSION_SECONDS,
} from "@/lib/voice-beta-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const candidate = form.get("founderPass");
  const founderPass = typeof candidate === "string" ? candidate.trim() : "";

  if (!isValidFounderPass(founderPass)) {
    const denied = NextResponse.redirect(new URL("/voice-beta?denied=1", request.url), 303);
    denied.headers.set("Cache-Control", "no-store");
    return denied;
  }

  const response = NextResponse.redirect(new URL("/voice-beta", request.url), 303);
  response.cookies.set(VOICE_BETA_COOKIE, founderPass, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/voice-beta",
    maxAge: VOICE_BETA_SESSION_SECONDS,
  });
  response.headers.set("Cache-Control", "no-store");
  return response;
}
