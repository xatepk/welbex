import { TableCell } from "./TableCell"

export const TableRow = ({ row }) => {

  const { 0:date, 1:title, 2:amount, 3:distance } = row;

  return (
    <tr className="table__row">
      <TableCell item={date} />
      <TableCell item={title} />
      <TableCell item={amount} />
      <TableCell item={distance} />
    </tr>
  )
}