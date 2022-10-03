import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Table = ({ data }) => {
  // console.log(data);
  // debugger;
  return (
    <div className="table">
      <TableHeader />
      {data.map((row, idx) => <TableRow row={row} key={idx}/>)}
    </div>
  )
}