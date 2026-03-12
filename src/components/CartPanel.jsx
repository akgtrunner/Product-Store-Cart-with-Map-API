import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

export default function CartPanel() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ border: '2px solid blue', padding: '15px', borderRadius: '8px' }}>
      <h2>🛒 Cart</h2>
      {items.length === 0 && <p>Cart is empty</p>}
      {items.map(item => (
        <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
          <strong>{item.title}</strong> — ${item.price}
          <div>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              disabled={item.quantity <= 1}>−</button>
            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}
              style={{ marginLeft: '10px', color: 'red' }}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}