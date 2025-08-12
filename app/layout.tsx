import './globals.css';
import Nav from '@/components/Nav';

export const metadata = {
  title: 'Courtier Pro',
  description: 'SaaS pour courtiers en assurance',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="max-w-6xl mx-auto px-6">
          <header className="py-6">
            <h1 className="text-3xl font-bold">Courtier Pro</h1>
            <p className="text-white/70">Starter MVP — Next.js + Prisma</p>
            <Nav />
          </header>
          <main className="grid gap-6">{children}</main>
          <footer className="py-10 text-sm text-white/50">
            © {new Date().getFullYear()} Courtier Pro — Starter
          </footer>
        </div>
      </body>
    </html>
  );
}
