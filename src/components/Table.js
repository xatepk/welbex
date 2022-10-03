import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export const Table = ({ data, isSorted }) => {
  // console.log(data);
  // debugger;
  return (
    <table className="table">
      <TableHeader isSorted={isSorted} />
      <tbody>
       {data.map((row, idx) => <TableRow row={row} key={idx}/>)}
      </tbody>
    </table>
  )
}