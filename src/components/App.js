import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
// import { useData } from '../hooks/hooks';
// import { tableData } from '../data/data';
import { Table } from './Table';
import { Navbar } from './NavBar';
import { Filter } from './Filter';
import { filter } from '../helper/helper';
import { useData } from '../hooks/hooks';

function App() {
  const { data, loading, error, setData, dataManual } = useData();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  let [currentRows, setCurrentRows] = useState([])

  //get current row
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


  const sortHandler = (cell) => {
    let sortedRows = data.sort((rowA, rowB) => rowA[Object.keys(rowA)[cell]] > rowB[Object.keys(rowB)[cell]] ? 1: -1);
    setData(sortedRows);
    setCurrentRows(sortedRows.slice(indexOfFirstRow, indexOfLastRow));
  }

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const filterHandler = (value, nameValue, contidionValue) => {
    setCurrentPage(1);
    const { filterRows } = filter(value, nameValue, contidionValue, dataManual);
    setData(filterRows);
    setCurrentRows(filterRows.slice(indexOfFirstRow, indexOfLastRow));
  }


  return (
    <div className="page">
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Navbar />
      <Filter doFilter={filterHandler}/>
      <Table data={currentRows} doSort={sortHandler} />
      <Pagination rowsPerPage={rowsPerPage}
                  totalRows={data.length}
                  paginate={paginateHandler} />
    </div>
  );
}

export default App;
