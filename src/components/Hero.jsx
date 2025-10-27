import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> Award‑Winning Taste
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900">
            Juicy, handcrafted burgers made with love
          </h1>
          <p className="mt-4 text-neutral-600 text-lg md:text-xl">
            From classic favorites to chef-inspired creations, every bite is a flavor celebration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#menu" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-white font-semibold shadow-lg shadow-amber-200 hover:bg-amber-600 transition">
              Explore Menu <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-6 py-3 font-semibold text-neutral-800 hover:bg-neutral-50 transition">
              Learn More
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p>Rated 4.9/5 by 2,000+ burger lovers</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 h-72 w-72 bg-amber-200/50 rounded-full blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
            alt="Signature burger with melted cheese and fresh toppings"
            className="relative rounded-2xl shadow-2xl border border-neutral-200"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
