import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '@/lib/api';
import CategoryGrid from '@/components/home/FeatureCategories';

const CategoriesPage = () => {
  const { data: categories, isLoading, error } = useQuery(['categories'], fetchCategories);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return <CategoryGrid categories={categories} />;
};

export default CategoriesPage;