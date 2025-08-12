import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.client.findMany({ orderBy: { createdAt: 'desc' }, take: 100 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const org = await prisma.organization.findFirst();
  const data = await prisma.client.create({ data: {
    organizationId: body.organizationId || org!.id,
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    tags: body.tags || [],
    notes: body.notes || null,
  }});
  return NextResponse.json(data, { status: 201 });
}
