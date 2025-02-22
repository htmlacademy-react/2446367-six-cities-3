import { useMap } from '../../hooks/use-map';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { memo, useEffect, useRef } from 'react';

import { Marker, layerGroup } from 'leaflet';
import { CITIES } from '../../utils/data/data';
import { CityName } from '../../types/city';
import { ServerOffer } from '../../types/offer';
import { selectActiveId } from '../../store/selectors/offers';

import { currentCustomIcon, defaultCustomIcon } from './data/data';

type MapProps = {
  className?: string;
  offers: ServerOffer[];
  city: CityName;
  isOfferPage?: boolean;
};

function MapInner({ offers, city, className, isOfferPage = false }: MapProps) {
  let activeOffer = useAppSelector(selectActiveId);
  const params = useParams();

  if (isOfferPage) {
    activeOffer = params.id;
  }

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
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeOffer, map, offers, isOfferPage]);

  return <section className={`map ${className}`} ref={mapRef} />;
}

const Map = memo(MapInner);

export default Map;
