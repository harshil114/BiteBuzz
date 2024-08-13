import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import emptyCartImg from "../assets/empty-cart.png";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container m-4 p-4">
      <div className="item-list w-6/12 m-auto ">
        {cartItem.length === 0 && (
          <div className="img flex justify-center items-center">
            <img src={emptyCartImg} alt="" />
          </div>
        )}
        {cartItem.length !== 0 && (
          <button
            className="btn-clear-cart button mb-3  px-4 py-2 mx-4 bg-[#41d4d8] rounded-lg hover:bg-[#4adfe4] font-medium active:bg-[#41d4d8]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        <ItemList items={cartItem} />
      </div>
    </div>
  );
};
export default Cart;
