'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Landmark, FileText, CheckSquare, Clock, DollarSign, ShieldCheck, Shield } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: 'Today on the Hill', href: '/', icon: Landmark },
    { name: 'Bills', href: '/bills', icon: FileText },
    { name: 'Recorded Votes', href: '/votes', icon: CheckSquare },
    { name: 'Deadlines', href: '/deadlines', icon: Clock },
    { name: 'Money (4 Regimes)', href: '/money', icon: DollarSign },
    { name: 'Neutrality Checks', href: '/sources', icon: ShieldCheck },
    { name: 'Admin', href: '/admin', icon: Shield },
  ];

  return (
    <header className="bg-[#FFFFFF] border-b border-[#E4E9F0]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-[#0E63C4] flex items-center justify-center text-white font-bold text-base">
            C
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-[#0B1220] text-lg font-mono tracking-tight">CAPITOL.WATCH</span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#EBF3FD] text-[#0A3F73] font-semibold border border-[#CBD5E1]">
                119th Congress
              </span>
            </div>
            <p className="text-xs text-[#5B6779]">What Congress introduced, what moved, and who filed what.</p>
          </div>
        </Link>

        <nav className="flex items-center gap-1 overflow-x-auto py-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  isActive
                    ? 'bg-[#EBF3FD] text-[#0E63C4] font-semibold border border-[#CBD5E1]'
                    : 'text-[#24303F] hover:bg-[#F6F8FB]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
