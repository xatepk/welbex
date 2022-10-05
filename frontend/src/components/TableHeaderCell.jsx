import React from 'react';

import { rowItemMapping } from '../constants/constants';
import { switchDirection } from '../helper/utils';

export const TableHeaderCell = ({ isSortable, name, sorting, doSort }) => {
  const sortHandler = (e) => {
    if (isSortable) {
      doSort({
        field: rowItemMapping[e.target.cellIndex],
        direction: switchDirection(sorting.direction),
      });
    }
  };

  return(
    <th className="table__cell table__cell_hover" onClick={sortHandler}>{name}</th>
  )
}