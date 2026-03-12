import { useState, useEffect } from 'react';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import CartPanel from './components/CartPanel';
import StoreMap from './components/StoreMap';

function MainApp() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const cartCount = useSelector(state =>
    state.cart.items.reduce((sum, i) => sum + i.quantity, 0)
  );

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => { setProducts(res.data.products); setLoading(false); });
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛍️ Product Store | Cart Items: {cartCount}</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 2 }}>
          {loading ? <p>Loading...</p> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
              {products.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </div>

        {/* ✅ YE SAHI JAGAH HAI */}
        <div style={{ flex: 1 }}>
          <CartPanel />
          <StoreMap />
        </div>

      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}