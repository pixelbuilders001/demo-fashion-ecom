import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useWishlist } from "@/context/WishlistContext";
import { ProductCard } from "@/components/product/ProductCard";
import { Heart } from "lucide-react";

export default function Wishlist() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-elegant py-24 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
          <h1 className="heading-section mb-4">Your Wishlist is Empty</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Save your favorite items to your wishlist and shop them later.
          </p>
          <Link to="/collection" className="btn-elegant">
            Explore Collection
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-elegant py-8 md:py-12">
        <h1 className="heading-section mb-8">My Wishlist ({items.length})</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
