import { memo } from 'react';

type GalleryProps = {
  images: string[];
};

const enum GalleryDefault {
  MaxCount = 6,
}

function BaseGallery({ images }: GalleryProps) {
  return (
    <div className="offer__gallery">
      {images.slice(0, GalleryDefault.MaxCount).map((image) => (
        <div className="offer__image-wrapper" key={image}>
          <img className="offer__image" src={image} alt="Photo studio" />
        </div>
      ))}
    </div>
  );
}

const Gallery = memo(BaseGallery);

export default Gallery;
