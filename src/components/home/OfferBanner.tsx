import { Link } from "react-router-dom";

export function OfferBanner() {
  return (
    <section className="bg-terracotta text-terracotta-foreground py-12">
      <div className="container-elegant text-center">
        <p className="text-sm tracking-[0.3em] uppercase opacity-90 mb-2">
          Limited Time Offer
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
          Flat 40% Off Today
        </h2>
        <p className="opacity-90 mb-6 max-w-md mx-auto">
          Use code <span className="font-medium">LUXE40</span> at checkout. 
          Valid on select styles.
        </p>
        <Link
          to="/collection/sale"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium tracking-widest uppercase bg-terracotta-foreground text-terracotta hover:bg-terracotta-foreground/90 transition-colors"
        >
          Shop Sale
        </Link>
      </div>
    </section>
  );
}
