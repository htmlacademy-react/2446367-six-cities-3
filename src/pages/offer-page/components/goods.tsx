import { memo } from 'react';

type GoodsProps = {
  goods: string[];
};

function BaseGoods({ goods }: GoodsProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Goods = memo(BaseGoods);

export default Goods;
