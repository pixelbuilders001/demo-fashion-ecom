export function Newsletter() {
  return (
    <section className="section-padding">
      <div className="container-elegant">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-section mb-4">Stay Connected</h2>
          <p className="text-muted-foreground mb-8">
            Be the first to know about new arrivals, exclusive offers, and style inspiration. 
            Join our community of fashion enthusiasts.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-elegant flex-1"
              required
            />
            <button type="submit" className="btn-elegant whitespace-nowrap">
              Subscribe
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Luxe.
          </p>
        </div>
      </div>
    </section>
  );
}
