import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { BestSellers } from "@/components/home/BestSellers";
import { SeasonalCollection } from "@/components/home/SeasonalCollection";
import { OfferBanner } from "@/components/home/OfferBanner";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <BestSellers />
      <SeasonalCollection />
      <OfferBanner />
      <CustomerReviews />
      <Newsletter />
    </Layout>
  );
};

export default Index;
