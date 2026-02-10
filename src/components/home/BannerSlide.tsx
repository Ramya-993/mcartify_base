import { useState } from 'react';
import { motion } from 'framer-motion';

const banners = [
  { id: 1, text: 'Free Shipping on Orders Over $50' },
  { id: 2, text: '20% Off on Your First Purchase' },
  { id: 3, text: 'New Arrivals Are Here!' },
];

const BannerSlide = () => {
  const [current, setCurrent] = useState(0);

  const nextBanner = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        key={banners[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-200 text-center p-4"
      >
        {banners[current].text}
      </motion.div>
      <button onClick={nextBanner} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </div>
  );
};

export default BannerSlide;