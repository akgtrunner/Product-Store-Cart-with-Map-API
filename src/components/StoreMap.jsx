import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const position = [28.6139, 77.2090];

export default function StoreMap() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3 style={{ color: '#1a1a2e', marginBottom: '10px' }}>
        📍 Our Store Location
      </h3>
      <MapContainer
        center={position}
        zoom={14}
       style={{ width: '100%', height: '300px', borderRadius: '12px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={position}>
          <Popup>🛍️ Our Store is Here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}