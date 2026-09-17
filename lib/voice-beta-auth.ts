import "server-only";

import {
  createDecipheriv,
  createHash,
  scryptSync,
  timingSafeEqual,
} from "node:crypto";
import {
  VOICE_BETA_ACCESS_VERIFIER,
  VOICE_BETA_SEALED_TOKEN,
  VOICE_BETA_SEAL_IV,
  VOICE_BETA_SEAL_SALT,
  VOICE_BETA_SEAL_TAG,
} from "@/lib/voice-beta-sealed-config";

export const VOICE_BETA_COOKIE = "afv_voice_beta_founder";
export const VOICE_BETA_SESSION_SECONDS = 60 * 60 * 12;

function fromBase64Url(value: string): Buffer {
  return Buffer.from(value, "base64url");
}

export function isValidFounderPass(candidate: string | undefined): boolean {
  if (!candidate || candidate.length > 128) return false;

  const actual = createHash("sha256").update(candidate).digest();
  const expected = Buffer.from(VOICE_BETA_ACCESS_VERIFIER, "hex");

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

export function unsealVoiceEmbedToken(founderPass: string): string {
  if (!isValidFounderPass(founderPass)) {
    throw new Error("Unauthorized founder beta session");
  }

  const key = scryptSync(founderPass, fromBase64Url(VOICE_BETA_SEAL_SALT), 32);
  const decipher = createDecipheriv(
    "aes-256-gcm",
    key,
    fromBase64Url(VOICE_BETA_SEAL_IV),
  );
  decipher.setAuthTag(fromBase64Url(VOICE_BETA_SEAL_TAG));

  return Buffer.concat([
    decipher.update(fromBase64Url(VOICE_BETA_SEALED_TOKEN)),
    decipher.final(),
  ]).toString("utf8");
}
