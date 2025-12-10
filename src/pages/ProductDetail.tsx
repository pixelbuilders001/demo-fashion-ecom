import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, Minus, Plus, Star, Truck, RotateCcw, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const { toast } = useToast();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container-elegant py-24 text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/collection" className="btn-elegant">
            Continue Shopping
          </Link>
        </div>
      </Layout>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to choose a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    addItem(product, selectedColor, selectedSize, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to choose a size before purchasing.",
        variant: "destructive",
      });
      return;
    }
    addItem(product, selectedColor, selectedSize, quantity);
    window.location.href = "/checkout";
  };

  return (
    <Layout>
      <div className="container-elegant py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li>
              <Link
                to={`/collection/${product.category}`}
                className="text-muted-foreground hover:text-foreground capitalize"
              >
                {product.category}
              </Link>
            </li>
            <li className="text-muted-foreground">/</li>
            <li className="truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "w-20 aspect-[3/4] overflow-hidden border-2 transition-colors",
                    selectedImage === index ? "border-primary" : "border-transparent"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="px-3 py-1 text-xs tracking-wider uppercase bg-foreground text-background">
                  New
                </span>
              )}
              {product.originalPrice && (
                <span className="px-3 py-1 text-xs tracking-wider uppercase bg-terracotta text-terracotta-foreground">
                  Sale
                </span>
              )}
            </div>

            <h1 className="font-serif text-3xl md:text-4xl font-light mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "text-border"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-medium">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Color Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Color</span>
                <span className="text-sm text-muted-foreground">{selectedColor}</span>
              </div>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "px-4 py-2 text-sm border transition-colors",
                      selectedColor === color
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    )}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Size</span>
                <button className="text-sm text-muted-foreground underline hover:no-underline">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[48px] px-4 py-2 text-sm border transition-colors",
                      selectedSize === size
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <span className="text-sm font-medium block mb-3">Quantity</span>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-secondary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button onClick={handleAddToCart} className="flex-1 btn-outline-elegant">
                Add to Cart
              </button>
              <button onClick={handleBuyNow} className="flex-1 btn-elegant">
                Buy Now
              </button>
              <button
                onClick={() => toggleItem(product)}
                className={cn(
                  "p-3 border border-border hover:border-primary transition-colors",
                  inWishlist && "text-terracotta border-terracotta"
                )}
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={cn("h-5 w-5", inWishlist && "fill-current")} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mb-8">
              <div className="text-center">
                <Truck className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="text-center">
                <RotateCcw className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">30-Day Returns</span>
              </div>
              <div className="text-center">
                <Shield className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">2-Year Warranty</span>
              </div>
            </div>

            {/* Accordion Details */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="fabric">
                <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                  Fabric & Composition
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{product.fabric}</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                  Care Instructions
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-1 text-muted-foreground">
                    {product.care.map((instruction, index) => (
                      <li key={index}>• {instruction}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger className="text-sm font-medium uppercase tracking-wider">
                  Shipping & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Free standard shipping on orders over $150. Express delivery available.
                    Easy 30-day returns on all unworn items with tags attached.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="heading-section mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
