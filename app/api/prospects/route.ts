import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.prospect.findMany({ orderBy: { updatedAt: 'desc' }, take: 100 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const data = await prisma.prospect.create({ data: {
    organizationId: body.organizationId || (await prisma.organization.findFirst())!.id,
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    source: body.source,
    stage: body.stage,
    value: body.value,
    nextActionAt: body.nextActionAt ? new Date(body.nextActionAt) : null,
    tags: body.tags || [],
    notes: body.notes || null,
  }});
  return NextResponse.json(data, { status: 201 });
}
