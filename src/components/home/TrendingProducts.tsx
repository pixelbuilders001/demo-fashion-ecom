import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function TrendingProducts() {
  const trendingProducts = products.slice(0, 4);

  return (
    <section className="section-padding bg-cream">
      <div className="container-elegant">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Trending Now</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Discover the pieces our community loves most.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
