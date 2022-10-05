import { columnName } from "../data/data";
import { TableHeaderCell } from "./TableHeaderCell";

export const TableHeader = ({ doSort }) => {


  return (
    <thead className="table__row table__row-header">
      <tr>
        {columnName.map((v, i) =>
          <TableHeaderCell
            key={i}
            isSortable={i !== 0}
            name={v}
            doSort={doSort}
          />
        )}
      </tr>
    </thead>
  )
};