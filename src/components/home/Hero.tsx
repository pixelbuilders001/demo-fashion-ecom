import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Content */}
      <div className="container-elegant relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary-foreground/90 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            Winter Collection 2024
          </p>
          <h1 className="heading-display text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Timeless Elegance, <br />
            <span className="text-elegant">Redefined</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover our latest collection of refined essentials, crafted with exceptional materials and timeless design.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/collection/new-arrivals"
              className="btn-elegant bg-primary-foreground text-foreground border-primary-foreground hover:bg-transparent hover:text-primary-foreground"
            >
              Shop New Arrivals
            </Link>
            <Link
              to="/collection"
              className="btn-outline-elegant border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
