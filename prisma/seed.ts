import { PrismaClient, PipelineStage, ContractStatus } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const org = await prisma.organization.create({
    data: { name: 'Demo Courtier' },
  });

  const advisor = await prisma.user.create({
    data: { email: 'advisor@example.com', fullName: 'Conseiller Demo' },
  });
  await prisma.membership.create({
    data: { userId: advisor.id, organizationId: org.id, role: 'ADVISOR' },
  });

  const client = await prisma.client.create({
    data: {
      organizationId: org.id,
      fullName: 'Client Test',
      email: 'client@test.com',
      phone: '+15065550000',
      tags: ['auto','renouvellement'],
      notes: 'Client de démonstration'
    },
  });

  await prisma.contract.create({
    data: {
      organizationId: org.id,
      clientId: client.id,
      type: 'auto',
      number: 'POL-ABC-001',
      premium: 89.99,
      renewalDate: new Date(Date.now() + 1000*60*60*24*30),
      status: ContractStatus.ACTIVE,
    },
  });

  await prisma.prospect.createMany({
    data: [
      { organizationId: org.id, fullName: 'Prospect A', email: 'a@test.com', stage: PipelineStage.NEW, source: 'Referral' },
      { organizationId: org.id, fullName: 'Prospect B', email: 'b@test.com', stage: PipelineStage.QUALIFIED, source: 'Website' },
      { organizationId: org.id, fullName: 'Prospect C', email: 'c@test.com', stage: PipelineStage.PROPOSAL_SENT, source: 'Event' },
    ]
  });

  console.log('Seed OK');
}

main().finally(() => prisma.$disconnect());
