import Card from '@/components/Card';
import { prisma } from '@/lib/db';

export default async function ProspectsPage(){
  const prospects = await prisma.prospect.findMany({ orderBy: { updatedAt: 'desc' }, take: 100 });
  const stages = ['NEW','QUALIFIED','PROPOSAL_SENT','NEGOTIATION','WON','LOST'] as const;

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stages.map(stage => (
        <Card key={stage} title={stage}>
          <ul className="space-y-2">
            {prospects.filter(p => p.stage === stage).map(p => (
              <li key={p.id} className="bg-white/5 rounded-lg p-3">
                <div className="font-semibold">{p.fullName}</div>
                <div className="text-xs text-white/70">{p.email || p.phone || '—'}</div>
                {p.nextActionAt && <div className="text-xs mt-1">Prochain suivi : {new Date(p.nextActionAt).toLocaleDateString()}</div>}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
