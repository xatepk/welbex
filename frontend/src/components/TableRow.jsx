import React from 'react';

import { TableCell } from './TableCell'

export const TableRow = ({ row }) => {

  const { date, title, amount, distance } = row;

  return (
    <tr className="table__row">
      <TableCell item={new Date(date).toLocaleDateString()} />
      <TableCell item={title} />
      <TableCell item={amount} />
      <TableCell item={distance} />
    </tr>
  )
}