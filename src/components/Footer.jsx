import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-amber-500 to-red-500 flex items-center justify-center text-white font-black">BB</div>
            <span className="font-extrabold tracking-tight text-xl">Burger Bliss</span>
          </div>
          <p className="mt-3 text-neutral-600">Crafting crave-worthy burgers since 2012. Locally sourced ingredients, made fresh daily.</p>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-neutral-900">Visit Us</h4>
          <div className="flex items-center gap-3 text-neutral-700"><MapPin className="h-4 w-4" /> 123 Flavor St, Foodville</div>
          <div className="flex items-center gap-3 text-neutral-700"><Phone className="h-4 w-4" /> (555) 123-4567</div>
          <div className="flex items-center gap-3 text-neutral-700"><Clock className="h-4 w-4" /> Mon–Sun: 11am – 10pm</div>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-900">Get Updates</h4>
          <p className="mt-2 text-neutral-600">Sign up to hear about specials and new creations.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
            <input type="email" required placeholder="Your email" className="flex-1 rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            <button className="rounded-md bg-amber-500 px-4 py-2 text-white font-semibold hover:bg-amber-600 transition">Join</button>
          </form>
          <div className="mt-4 flex items-center gap-4 text-neutral-600">
            <a href="#" aria-label="Facebook" className="hover:text-neutral-900"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-neutral-900"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-4 text-center text-sm text-neutral-500">© {new Date().getFullYear()} Burger Bliss. All rights reserved.</div>
    </footer>
  );
}
