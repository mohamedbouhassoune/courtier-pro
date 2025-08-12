import Card from '@/components/Card';
import { prisma } from '@/lib/db';

export default async function ContractsPage(){
  const contracts = await prisma.contract.findMany({
    include: { client: true },
    orderBy: { renewalDate: 'asc' },
    take: 100
  });

  return (
    <Card title="Contrats — prochaines échéances">
      <table className="w-full text-sm">
        <thead className="text-white/70">
          <tr>
            <th className="text-left p-2">Client</th>
            <th className="text-left p-2">Type</th>
            <th className="text-left p-2">Numéro</th>
            <th className="text-left p-2">Prime</th>
            <th className="text-left p-2">Renouvellement</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map(c => (
            <tr key={c.id} className="border-t border-white/10">
              <td className="p-2">{c.client.fullName}</td>
              <td className="p-2">{c.type}</td>
              <td className="p-2">{c.number || '—'}</td>
              <td className="p-2">{c.premium ?? '—'}</td>
              <td className="p-2">{c.renewalDate ? new Date(c.renewalDate).toLocaleDateString() : '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
