import { Star } from "lucide-react";
import { reviews } from "@/data/products";

export function CustomerReviews() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-elegant">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Join thousands of satisfied customers who trust Luxe for their wardrobe essentials.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-background p-8">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-accent text-accent" : "text-border"
                    }`}
                  />
                ))}
              </div>

              {/* Title */}
              <h3 className="font-medium mb-2">{review.title}</h3>

              {/* Content */}
              <p className="text-muted-foreground mb-6">{review.content}</p>

              {/* Author */}
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{review.author}</span>
                <span className="text-muted-foreground">{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
