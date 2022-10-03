import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
// import { useData } from '../hooks/hooks';
import { tableData } from '../data/data';
import { Table } from './Table';

function App() {
  // const { data, loading, error } = useData();
  const [data, setData] = useState([]);
  const loading = false;
  const error = false;

  useEffect(() => {
    setData(tableData);
  },[])

  const sortHandler = (cell) => {
    // console.log(cell);

    let sortedRows = Array.from(document.querySelector('.table').rows)
      .slice(1)
      .sort((rowA, rowB) => rowA.cells[cell].innerHTML > rowB.cells[cell].innerHTML ? 1 : -1)
      .map((tr) => {
        return [...tr.cells].map((td) => td.textContent);
      })
      .map((row) => {return {...row}});
      setData(sortedRows);
  }



  return (
    <div className="page">
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Table data={data} isSorted={sortHandler} />
    </div>
  );
}

export default App;
