import React from 'react';

import { columnsNames } from '../constants/constants';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';

export const Table = ({ data, sorting, doSort }) => (
  <table className="table">
    <thead className="table__row table__row-header">
    <tr>
      {columnsNames.map((v, i) =>
        <TableHeaderCell
          key={i}
          isSortable={i !== 0}
          name={v}
          sorting={sorting}
          doSort={doSort}
        />
      )}
    </tr>
  </thead>
    <tbody>
      {data.map((row, idx) => <TableRow row={row} key={idx}/>)}
    </tbody>
  </table>
);