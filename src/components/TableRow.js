import { TableCell } from "./TableCell"

export const TableRow = ({ row, key }) => {

  const { 0:date, 1:title, 2:amount, 3:distance } = row;

  return (
    <tr className="table__row" key={key}>
      <TableCell item={date} />
      <TableCell item={title} />
      <TableCell item={amount} />
      <TableCell item={distance} />
    </tr>
  )
}