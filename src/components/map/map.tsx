import { useMap } from '../../hooks/use-map';
import { useAppSelector } from '../../hooks/store';
import { useEffect, useRef } from 'react';

import { Icon, Marker, layerGroup } from 'leaflet';
import { CITIES } from '../../utils/data';
import { CityName } from '../../types/city';
import { ServerOffer } from '../../types/offer';
import { selectActiveId } from '../../store/selectors/offers';

type MapProps = {
  className?: string;
  offers: ServerOffer[];
  city: CityName;
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

function BaseMap({ offers, city, className }: MapProps) {
  const activeOffer = useAppSelector(selectActiveId);

  const cityLocation = CITIES.find((item) => item.name === city)!.location;

  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, cityLocation);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach(({ id, location }) => {
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
  }, [activeOffer, map, offers]);

  return <section className={`map ${className}`} ref={mapRef} />;
}

export const Map = BaseMap;
