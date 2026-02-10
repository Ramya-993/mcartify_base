import HeroBuilder from '@/components/home/HeroBuilder';
import BannerSlide from '@/components/home/BannerSlide';
import FeatureCategories from '@/components/home/FeatureCategories';
import TopSellingProducts from '@/components/home/TopSellingProducts';
import CustomerTestimonials from '@/components/home/CustomerTestimonials';
import CustomSection from '@/components/home/CustomSection';

const HomePage = () => {
  return (
    <div>
      <HeroBuilder />
      <BannerSlide />
      <FeatureCategories />
      <TopSellingProducts />
      <CustomerTestimonials />
      <CustomSection />
    </div>
  );
};

export default HomePage;