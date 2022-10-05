import React from 'react';

export const TableHeaderCell = ({ isSortable, name, doSort }) => {

  const sortHandler = (e) => {

    if (isSortable) {
      doSort(e.target.cellIndex);
    }

  }

  return(
    <th className="table__cell" onClick={sortHandler}>{name}</th>
  )
}