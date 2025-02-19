import { memo } from 'react';

type GalleryProps = {
  images: string[];
};

function BaseGallery({ images }: GalleryProps) {
  const slicedImages = images.slice(0, 6);

  return (
    <div className="offer__gallery">
      {slicedImages.map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

export const Gallery = memo(BaseGallery);
