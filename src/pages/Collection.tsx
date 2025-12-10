import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = ["Black", "White", "Cream", "Navy", "Charcoal", "Camel", "Sage"];
const priceRanges = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "Over $300", min: 300, max: Infinity },
];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Selling", value: "best-selling" },
];

export default function Collection() {
  const { category } = useParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState("newest");

  const categoryTitle = category
    ? category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "All Collections";

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (category && category !== "all") {
      if (category === "new-arrivals") {
        result = result.filter((p) => p.isNew);
      } else {
        result = result.filter((p) => p.category === category);
      }
    }

    // Filter by size
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((s) => selectedSizes.includes(s))
      );
    }

    // Filter by color
    if (selectedColors.length > 0) {
      result = result.filter((p) =>
        p.colors.some((c) => selectedColors.includes(c))
      );
    }

    // Filter by price
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "best-selling":
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [category, selectedSizes, selectedColors, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedPriceRange(null);
  };

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || selectedPriceRange !== null;

  return (
    <Layout>
      {/* Hero */}
      <div className="bg-secondary py-16 md:py-24">
        <div className="container-elegant text-center">
          <h1 className="heading-display mb-4">{categoryTitle}</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover our curated selection of premium essentials designed for the modern wardrobe.
          </p>
        </div>
      </div>

      <div className="container-elegant py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Clear all
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-sm font-medium pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              "w-64 shrink-0 transition-all duration-300 overflow-hidden",
              filtersOpen ? "max-w-64 opacity-100" : "max-w-0 opacity-0 md:max-w-64 md:opacity-100"
            )}
          >
            <div className="space-y-8">
              {/* Size Filter */}
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSizes((prev) =>
                          prev.includes(size)
                            ? prev.filter((s) => s !== size)
                            : [...prev, size]
                        )
                      }
                      className={cn(
                        "px-3 py-2 text-sm border transition-colors",
                        selectedSizes.includes(size)
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Color</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <label key={color} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() =>
                          setSelectedColors((prev) =>
                            prev.includes(color)
                              ? prev.filter((c) => c !== color)
                              : [...prev, color]
                          )
                        }
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          "w-5 h-5 border flex items-center justify-center transition-colors",
                          selectedColors.includes(color)
                            ? "border-primary bg-primary"
                            : "border-border group-hover:border-primary"
                        )}
                      >
                        {selectedColors.includes(color) && (
                          <span className="text-primary-foreground text-xs">✓</span>
                        )}
                      </span>
                      <span className="text-sm group-hover:text-muted-foreground transition-colors">
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPriceRange === index}
                        onChange={() =>
                          setSelectedPriceRange(
                            selectedPriceRange === index ? null : index
                          )
                        }
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                          selectedPriceRange === index
                            ? "border-primary"
                            : "border-border group-hover:border-primary"
                        )}
                      >
                        {selectedPriceRange === index && (
                          <span className="w-3 h-3 rounded-full bg-primary" />
                        )}
                      </span>
                      <span className="text-sm group-hover:text-muted-foreground transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm underline hover:no-underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
