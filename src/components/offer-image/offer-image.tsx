type OfferImageProps = {
  img: string;
}

export default function OfferImage({img}: OfferImageProps) {
  return (
    <div className="offer__image-wrapper">
      <img
        className="offer__image"
        src={img}
        alt="Photo studio"
      />
    </div>
  );
}
