import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks/store';
import { useEffect, useRef } from 'react';

import { Icon, Marker, layerGroup } from 'leaflet';
import { offersSelector } from '../../store/slices/offers';
import { CITIES} from '../../utils/data';
import { CityName } from '../../types/city';
import { ServerOffer } from '../../types/offer';

type MapProps = {
  className?: string;
  currentOffers: ServerOffer[];
  currentCity: CityName;
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

export default function Map({ currentOffers, currentCity, className }: MapProps) {
  const activeOffer = useAppSelector(offersSelector.activeId);
  const cityLocation = CITIES.find((item) => item.name === currentCity)!.location;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityLocation);

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
            activeOffer !== undefined && activeOffer === id
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
