import { memo } from 'react';

type GalleryProps = {
  images: string[];
};

const enum GalleryDefault {
  Max = 6,
}

function BaseGallery({ images }: GalleryProps) {
  return (
    <div className="offer__gallery">
      {images.slice(0, GalleryDefault.Max).map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

export const Gallery = memo(BaseGallery);
