export const TableHeader = ({ isSorted }) => {
  const sortHandler = (e) => {
    e.preventDefault();
    isSorted(e.target.cellIndex);
  }

  return (
    <thead className="table__row table__row-header">
      <tr>
        <th className="table__cell">Дата</th>
        <th className="table__cell" onClick={sortHandler}>Название</th>
        <th className="table__cell" onClick={sortHandler}>Количество</th>
        <th className="table__cell" onClick={sortHandler}>Расстояние</th>
      </tr>
    </thead>
  )
};