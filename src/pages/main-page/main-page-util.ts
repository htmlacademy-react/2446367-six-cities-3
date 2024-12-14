export const createMainPage = (offersCount: number) => {
  let emptyMain = false;
  let emptyPageMainClassName = '';
  let emptyPageContainerClassName = '';

  if (offersCount === 0) {
    emptyMain = true;
    emptyPageMainClassName = 'page__main--index-empty';
    emptyPageContainerClassName = 'cities__places-container--empty';
  }

  return {
    emptyMain,
    emptyPageMainClassName,
    emptyPageContainerClassName,
  };
};
