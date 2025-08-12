import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

// Placeholder: à déclencher par CRON (Inngest / Vercel Cron) pour détecter les renouvellements J-30 / J-15 / J-7
export async function POST() {
  const now = new Date();
  const inDays = (d: number) => new Date(now.getTime() + d*24*60*60*1000);

  const targets = await prisma.contract.findMany({
    where: { renewalDate: { in: [inDays(30), inDays(15), inDays(7)] } },
    include: { client: true }
  });

  // Ici : envoyer emails/SMS via Postmark/Twilio (non branchés)
  console.log('Renouvellements à relancer:', targets.length);
  return NextResponse.json({ count: targets.length });
}
