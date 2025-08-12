import Card from '@/components/Card';
import { prisma } from '@/lib/db';

export default async function ClientsPage(){
  const clients = await prisma.client.findMany({ orderBy: { createdAt: 'desc' }, take: 50 });
  return (
    <Card title="Clients (50 derniers)">
      <table className="w-full text-sm">
        <thead className="text-white/70">
          <tr><th className="text-left p-2">Nom</th><th className="text-left p-2">Email</th><th className="text-left p-2">Téléphone</th><th className="text-left p-2">Tags</th></tr>
        </thead>
        <tbody>
          {clients.map(c => (
            <tr key={c.id} className="border-t border-white/10">
              <td className="p-2">{c.fullName}</td>
              <td className="p-2">{c.email || '—'}</td>
              <td className="p-2">{c.phone || '—'}</td>
              <td className="p-2">{(c.tags || []).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
