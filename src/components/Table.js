import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Table = (data) => {
  return (
    <div className="table">
      <TableHeader />
      {data.map((row) => <TableRow row={row} key={row.id} />)}
    </div>
  )
}