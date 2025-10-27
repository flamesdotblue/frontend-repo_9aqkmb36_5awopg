import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';

function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">Quality you can taste</h2>
          <p className="mt-4 text-neutral-600 text-lg">
            We grind fresh beef every morning, bake our buns in-house, and prepare sauces from scratch using real ingredients. It’s the kind of care you can taste in every bite.
          </p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" /> Locally sourced, responsibly raised ingredients</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" /> Handcrafted patties, smashed for crispy edges</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" /> Vegetarian and gluten-free options available</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-72 w-72 bg-amber-200/50 rounded-full blur-3xl" />
          <img
            src="https://images.unsplash.com/photo-1550547660-5435e22d4ccf?q=80&w=1600&auto=format&fit=crop"
            alt="Fresh ingredients laid out for burger crafting"
            className="relative rounded-2xl shadow-2xl border border-neutral-200"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
      </main>
      <Footer />
    </div>
  );
}
