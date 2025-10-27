import { useState } from 'react';
import { Menu as MenuIcon, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#menu', label: 'Menu' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-black">BB</div>
          <span className="font-extrabold tracking-tight text-xl">Burger Bliss</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition">
              {item.label}
            </a>
          ))}
          <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-white font-semibold shadow hover:bg-amber-600 transition">
            <ShoppingCart className="h-4 w-4" /> Order Now
          </a>
        </nav>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200">
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-base font-medium text-neutral-800" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#menu" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-white font-semibold shadow self-start">
              <ShoppingCart className="h-4 w-4" /> Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
