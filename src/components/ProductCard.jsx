import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const inCart = cartItems.some(i => i.id === product.id);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
      <img src={product.thumbnail} alt={product.title} width="100%" height="150px"
        style={{ objectFit: 'cover' }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button
        onClick={() => dispatch(addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        }))}
        disabled={inCart}
        style={{ background: inCart ? 'gray' : 'green', color: 'white',
          padding: '6px 12px', cursor: inCart ? 'not-allowed' : 'pointer' }}
      >
        {inCart ? 'Added ✅' : 'Add to Cart'}
      </button>
    </div>
  );
}