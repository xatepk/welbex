import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Table = ({ data, doSort }) => {
  // console.log(data);
  // debugger;
  return (
    <table className="table">
      <TableHeader doSort={doSort} />
      <tbody>
       {data.map((row, idx) => <TableRow row={row} key={idx}/>)}
      </tbody>
    </table>
  )
}