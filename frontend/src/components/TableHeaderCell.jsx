import React, { useState } from 'react';

import { rowItemMapping } from '../constants/constants';
import { switchDirection } from '../helper/utils';

const cellSortClass = (sorting, field) => {
  let sortClass = ' table__cell_sorting';
  if (sorting.field !== field) {
    return sortClass;
  }

  switch(sorting.direction) {
    case 'ASC': {
      sortClass += '-asc';
      break;
    }
    case 'DESC': {
      sortClass += '-desc';
      break;
    }
  }
  return sortClass;
}

export const TableHeaderCell = ({ isSortable, name, sorting, doSort }) => {
  const [field, setField] = useState('');

  const sortHandler = (e) => {
    const fieldRowItem = rowItemMapping[e.target.cellIndex];
    if (isSortable) {
      doSort({
        field: fieldRowItem,
        direction: sorting.field === fieldRowItem ? switchDirection(sorting.direction) : 'ASC'
      });
      setField(fieldRowItem);
    }
  };

  const thHoverClass = isSortable ? ' table__cell_hover' : '';
  const thSortClass = isSortable ? cellSortClass(sorting, field) : '';

  return(
    <th className={`table__cell${thHoverClass}${thSortClass}`} onClick={sortHandler}>{name}</th>
  )
}