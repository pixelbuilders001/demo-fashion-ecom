import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller);

  return (
    <section className="section-padding">
      <div className="container-elegant">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="heading-section mb-4">Best Sellers</h2>
            <p className="text-muted-foreground max-w-md">
              Our most-loved pieces, chosen by you.
            </p>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {bestSellers.map((product) => (
              <CarouselItem key={product.id} className="pl-4 basis-1/2 lg:basis-1/4">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 border-border hover:bg-secondary" />
          <CarouselNext className="hidden md:flex -right-4 border-border hover:bg-secondary" />
        </Carousel>
      </div>
    </section>
  );
}
