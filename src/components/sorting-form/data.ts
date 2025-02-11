export const SORT_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] satisfies Record<SortOption, string>;

export const enum SortOption {
  Popular,
  PriceLowToHigh,
  PriceHighToLow,
  TopRatedFirst,
}
