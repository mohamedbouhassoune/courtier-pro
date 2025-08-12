import { NextResponse } from 'next/server';
// Brancher Postmark ici
export async function POST(req: Request) {
  const body = await req.json();
  // TODO: appeler Postmark avec body.to, body.subject, body.text
  return NextResponse.json({ ok: true });
}
