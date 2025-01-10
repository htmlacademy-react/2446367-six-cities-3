import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks/use-map';
import { Offer, Offers } from '../../mocks/mock-types/offers';
import { useEffect, useRef } from 'react';

type MapProps = {
  mockOffers: Offers;
  activeOffer: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl:
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl:
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({ mockOffers, activeOffer }: MapProps) {

  const offer = mockOffers[0];
  const { city } = offer;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      mockOffers.forEach((item) => {
        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude,
        });

        marker
          .setIcon(
            (activeOffer !== undefined && activeOffer.id === item.id)
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

        return () => {
          map.removeLayer(markerLayer);
        };
      });
    }
  }, [activeOffer, map, mockOffers, offer]);

  return <section className="cities__map map" ref={mapRef} />;
}
