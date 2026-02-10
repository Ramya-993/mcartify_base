import { useAppSelector } from '@/lib/store/hooks';
import CartItem from '@/components/cart/CartItem';

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <div className="mt-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};

export default CartPage;