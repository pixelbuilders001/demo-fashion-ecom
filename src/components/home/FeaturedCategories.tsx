import { Link } from "react-router-dom";
import { categories } from "@/data/products";

export function FeaturedCategories() {
  return (
    <section className="section-padding">
      <div className="container-elegant">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Explore our curated collections designed for every style and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="font-serif text-2xl text-primary-foreground mb-2">
                    {category.name}
                  </h3>
                  <span className="inline-flex items-center text-sm text-primary-foreground/90 tracking-widest uppercase group-hover:gap-3 transition-all">
                    Shop Now
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
