import React, { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
// import { useData } from '../hooks/hooks';
import { tableData } from '../data/data';
import { Table } from './Table';
import { Navbar } from './NavBar';
import { Filter } from './Filter';
import { filter } from '../helper/helper';

function App() {
  // const { data, loading, error } = useData();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  let [currentRows, setCurrentRows] = useState([])

  //get current row
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  currentRows = data.slice(indexOfFirstRow, indexOfLastRow);


  const loading = false;
  const error = false;

  useEffect(() => {
    setData(tableData);
  },[])

  const sortHandler = (cell) => {
    let sortedRows = data.sort((rowA, rowB) => rowA[cell] > rowB[cell] ? 1: -1);
    setData(sortedRows);
    setCurrentRows(sortedRows.slice(indexOfFirstRow, indexOfLastRow));
  }

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const filterHandler = (value, nameValue, contidionValue) => {
    setCurrentPage(1);
    const { filterRows } = filter(value, nameValue, contidionValue, tableData);
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
