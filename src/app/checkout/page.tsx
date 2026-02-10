"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const checkoutSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  cardNumber: z.string().min(16, 'Card number is invalid'),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div>
          <label>Name</label>
          <input {...register('name')} className="border p-2" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label>Address</label>
          <input {...register('address')} className="border p-2" />
          {errors.address && <p className="text-red-500">{errors.address.message}</p>}
        </div>
        <div>
          <label>Card Number</label>
          <input {...register('cardNumber')} className="border p-2" />
          {errors.cardNumber && <p className="text-red-500">{errors.cardNumber.message}</p>}
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutPage;