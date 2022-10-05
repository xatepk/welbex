import { TableCell } from "./TableCell"

export const TableRow = ({ row }) => {

  const { date, title, amount, distance } = row;
  
  const dateFormat = date.slice(0,10);

  return (
    <tr className="table__row">
      <TableCell item={dateFormat} />
      <TableCell item={title} />
      <TableCell item={amount} />
      <TableCell item={distance} />
    </tr>
  )
}