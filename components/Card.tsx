import { ReactNode } from 'react';

export default function Card({children, title}: {children: ReactNode, title?: string}) {
  return (
    <div className="card rounded-2xl p-5 shadow-lg">
      {title && <h3 className="text-xl font-semibold mb-3">{title}</h3>}
      {children}
    </div>
  );
}
