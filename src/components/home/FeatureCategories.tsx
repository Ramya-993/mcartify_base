import { Category } from '@/types/category';

interface FeatureCategoriesProps {
  categories: Category[];
}

const FeatureCategories = ({ categories }: FeatureCategoriesProps) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="bg-white p-4 shadow-md rounded">
            <h3 className="font-bold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCategories;