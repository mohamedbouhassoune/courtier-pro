import { NextResponse } from 'next/server';
// Brancher Twilio ici
export async function POST(req: Request) {
  const body = await req.json();
  // TODO: appeler Twilio avec body.to, body.text
  return NextResponse.json({ ok: true });
}
