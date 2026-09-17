import { NextRequest, NextResponse } from "next/server";
import {
  isValidFounderPass,
  unsealVoiceEmbedToken,
  VOICE_BETA_COOKIE,
} from "@/lib/voice-beta-auth";
import { VOICE_BETA_ORIGIN } from "@/lib/voice-beta-sealed-config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const founderPass = request.cookies.get(VOICE_BETA_COOKIE)?.value;
  if (!isValidFounderPass(founderPass)) {
    return NextResponse.json(
      { error: "Founder access required" },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  const embedToken = unsealVoiceEmbedToken(founderPass!);
  return NextResponse.json(
    {
      scriptUrl: `${VOICE_BETA_ORIGIN}/embed/dograh-widget.js`,
      apiEndpoint: VOICE_BETA_ORIGIN,
      embedToken,
    },
    { headers: { "Cache-Control": "no-store, private" } },
  );
}
