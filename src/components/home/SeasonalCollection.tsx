import { Link } from "react-router-dom";

export function SeasonalCollection() {
  return (
    <section className="section-padding">
      <div className="container-elegant">
        <div className="grid md:grid-cols-2 gap-6 md:gap-0">
          {/* Image Side */}
          <div className="relative aspect-[4/5] md:aspect-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80"
              alt="Winter Collection"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="flex items-center bg-secondary p-8 md:p-16">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Seasonal Edit
              </p>
              <h2 className="heading-display text-foreground mb-6">
                The Winter <br />
                <span className="text-elegant">Capsule</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                A carefully curated selection of timeless pieces designed to see you through the season with effortless elegance. 
                From luxurious knits to perfectly tailored outerwear.
              </p>
              <Link to="/collection/winter" className="btn-elegant">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
