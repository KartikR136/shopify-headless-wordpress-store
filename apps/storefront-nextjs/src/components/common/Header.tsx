import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

export default function Header() {
  return (
    <header className="border-b p-4">
      <nav className="max-w-6xl mx-auto flex justify-between">
        <div className="font-bold">Headless Store</div>

        <div className="flex gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}