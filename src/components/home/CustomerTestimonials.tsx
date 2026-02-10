import { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: 'Great products and fast delivery!' },
  { id: 2, text: 'Excellent customer service.' },
  { id: 3, text: 'Highly recommend this shop!' },
];

const CustomerTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Testimonials</h2>
      <motion.div
        key={testimonials[current].id}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 p-4 rounded shadow-md"
      >
        {testimonials[current].text}
      </motion.div>
      <button onClick={nextTestimonial} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Next
      </button>
    </section>
  );
};

export default CustomerTestimonials;