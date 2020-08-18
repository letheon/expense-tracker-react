import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, item) => (acc += item.amount), 0);
  const absTotal = Math.abs(total).toFixed(2);
  const sign = total < 0 ? '-' : '+';

  return (
    <Fragment>
      <h4>Your Balance</h4>
      <h1>
        {sign}${absTotal}
      </h1>
    </Fragment>
  );
};
