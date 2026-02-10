import { Product } from '@/types/product';

interface TopSellingProductsProps {
  products: Product[];
}

const TopSellingProducts = ({ products }: TopSellingProductsProps) => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Top Selling Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopSellingProducts;