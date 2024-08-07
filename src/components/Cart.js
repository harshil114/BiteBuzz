import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container text-center m-4 p-4">
      <h1 className="cart-heading text-2xl font-bold">Cart</h1>
      <div className="item-list w-6/12 m-auto">
        <button
          className="btn-clear-cart p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItem.length === 0 && <h1>Cart looks empty</h1>}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
