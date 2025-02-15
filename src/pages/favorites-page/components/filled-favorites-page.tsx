import FavoriteOfferList from './favorite-offer-list';

export default function FilledFavoritesPage() {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <FavoriteOfferList />
    </section>
  );
}
