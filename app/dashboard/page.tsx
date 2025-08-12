import Card from '@/components/Card';
import { prisma } from '@/lib/db';

export default async function Dashboard(){
  const [clients, prospects, contracts] = await Promise.all([
    prisma.client.count(),
    prisma.prospect.groupBy({ by: ['stage'], _count: { _all: true } }),
    prisma.contract.count(),
  ]);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Clients">
          <div className="text-4xl font-bold">{clients}</div>
          <div className="text-white/60 mt-2">Total clients</div>
        </Card>
        <Card title="Prospects (par étape)">
          <ul className="space-y-1">
            {prospects.map(p => (
              <li key={p.stage} className="flex justify-between">
                <span>{p.stage}</span>
                <span className="font-semibold">{p._count._all}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Contrats">
          <div className="text-4xl font-bold">{contracts}</div>
          <div className="text-white/60 mt-2">Contrats totaux</div>
        </Card>
      </div>
    </>
  );
}
