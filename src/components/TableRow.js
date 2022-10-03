import { TableCell } from "./TableCell"

export const TableRow = ({ row, key }) => {

  const { date, title, amount, distance } = row;
  console.log(title);

  return (
    <div className="table__row">
      <TableCell className="table__cell" type={'date'} item={date} index={key} />
      <TableCell className="table__cell" type={'text'} item={title} index={key} />
      <TableCell className="table__cell" type={'text'} item={amount} index={key} />
      <TableCell className="table__cell" type={'text'} item={distance} index={key} />
    </div>
  )
}