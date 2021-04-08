import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Figure from './Figure';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((t) => t.amount);
  const income = amounts.filter((a) => a > 0).reduce((acc, item) => acc + item, 0);
  const expense = amounts.filter((a) => a < 0).reduce((acc, item) => acc + item, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          <Figure amount={income} includeSign={false} />
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          <Figure amount={expense} includeSign={false} />
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
