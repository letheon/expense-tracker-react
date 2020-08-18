import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .reduce((acc, trans) => (acc += trans.amount > 0 ? trans.amount : 0), 0)
    .toFixed(2);
  const expense = transactions
    .reduce((acc, trans) => (acc += trans.amount > 0 ? 0 : -trans.amount), 0)
    .toFixed(2);
  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p class="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};
