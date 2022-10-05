import React, { useState } from 'react';

export const TableHeaderCell = ({ isSortable, name, doSort }) => {

  const [ask, setAsk] = useState(false);

  const sortHandler = (e) => {
      setAsk(!ask);

    if (isSortable) {
      doSort(e.target.cellIndex, ask);
    }

  }

  return(
    <th className="table__cell table__cell_hover" onClick={sortHandler}>{name}</th>
  )
}