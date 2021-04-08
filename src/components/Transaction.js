import { useContext } from 'react';
import Figure from './Figure';
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({ transaction: { text, amount, id } }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text}
      <span>
        <Figure amount={amount} />
      </span>
      <button
        onClick={() => {
          deleteTransaction(id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
