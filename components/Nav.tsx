import Link from 'next/link';

export default function Nav(){
  const items = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/clients', label: 'Clients' },
    { href: '/prospects', label: 'Prospects' },
    { href: '/contracts', label: 'Contrats' },
  ];
  return (
    <nav className="flex gap-4 py-4">
      {items.map(i => (
        <Link key={i.href} href={i.href} className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20">
          {i.label}
        </Link>
      ))}
    </nav>
  );
}
