import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ( { id, description, amount, createdAt } ) => {
  return(
  <div>
      <h3>
        <Link to={`/edit/${id}`}>{description}</Link>
      </h3>

    <p>{amount} - {moment(createdAt).format('YYYY MM DD')}</p>
  </div>
);
}
// export default ExpenseListItem;
