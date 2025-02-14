export type Review = {
  id: string;
  date: string;
  user: {
    avatarUrl: string;
    isPro: boolean;
    name: string;
  };
  comment: string;
  rating: number;
};
