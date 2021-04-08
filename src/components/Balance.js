import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Figure from './Figure';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const balance = transactions
    .map((t) => t.amount)
    .reduce((accum, current) => accum + current, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>
        <Figure amount={balance} />
      </h1>
    </div>
  );
};

export default Balance;
