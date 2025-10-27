import { Star, ShoppingCart } from 'lucide-react';

const items = [
  {
    id: 'classic-cheese',
    name: 'Classic Cheese',
    desc: 'Smash patty, double cheddar, house sauce, brioche bun.',
    price: 9.99,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'smoky-bbq',
    name: 'Smoky BBQ',
    desc: 'Applewood bacon, crispy onions, BBQ glaze, pickles.',
    price: 12.5,
    img: 'https://images.unsplash.com/photo-1551782450-17144c3a09b7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'spicy-jalapeno',
    name: 'Spicy Jalapeño',
    desc: 'Pepper jack, jalapeños, chipotle mayo, lettuce.',
    price: 11.25,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'veggie-delight',
    name: 'Veggie Delight',
    desc: 'Grilled veggie patty, avocado, tomato jam, arugula.',
    price: 10.75,
    img: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Our Signature Menu</h2>
          <p className="mt-3 text-neutral-600">Freshly ground beef, baked-in-house buns, and sauces made from scratch daily.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.id} className="group rounded-xl bg-white border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
              <div className="relative overflow-hidden">
                <img src={item.img} alt={item.name} className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-lg text-neutral-900">{item.name}</h3>
                  <span className="font-extrabold text-amber-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="mt-1 text-sm text-neutral-600">{item.desc}</p>
                <div className="mt-3"><Stars /></div>
                <button className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 font-semibold hover:bg-neutral-800 transition">
                  <ShoppingCart className="h-4 w-4" /> Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
