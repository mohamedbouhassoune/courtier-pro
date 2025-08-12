import Card from '@/components/Card';
import Link from 'next/link';

export default function Page(){
  return (
    <>
      <Card title="Bienvenue">
        <p>Ce starter inclut : CRM basique, pipeline prospects, contrats avec dates de renouvellement, et API CRUD.</p>
        <p className="mt-3">Commencez par le <Link className="underline" href="/dashboard">Dashboard</Link>.</p>
      </Card>
    </>
  );
}
