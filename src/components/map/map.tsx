import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, Offers } from '../../mocks/mock-types/offers';
import { useEffect, useRef } from 'react';

type MapProps = {
  className?: string;
  currentOffers: Offers;
  activeOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

export default function Map({ currentOffers, activeOffer, className }: MapProps) {
  const { city } = currentOffers[0];

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      currentOffers.forEach(({ id, location }) => {
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            activeOffer !== undefined && activeOffer.id === id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);

        return () => {
          map.removeLayer(markerLayer);
        };
      });
    }
  }, [activeOffer, map, currentOffers]);

  return <section className={`map ${className}`} ref={mapRef} />;
}
