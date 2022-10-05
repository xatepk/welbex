import React, { useState } from 'react';
import { Pagination } from './Pagination';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { Table } from './Table';
import { Navbar } from './NavBar';
import { Filter } from './Filter';
import { filter, sorted } from '../helper/helper';
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


  const sortHandler = (cell, ask) => {
    const {sortedRows} = sorted(data, cell, ask)
    setData(sortedRows);
    setCurrentRows(sortedRows.slice(indexOfFirstRow, indexOfLastRow));
  }

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const filterHandler = (value, nameValue, contidionValue) => {
    if (value && nameValue && contidionValue) {
      setCurrentPage(1);
      const { filterRows } = filter(value, nameValue, contidionValue, dataManual);
      setData(filterRows);
      setCurrentRows(filterRows.slice(indexOfFirstRow, indexOfLastRow));
    } else {
      setData(dataManual);
      setCurrentRows(dataManual.slice(indexOfFirstRow, indexOfLastRow));
    }
  }


  return (
    <div className="page">
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {!error &&
      <>
        <Navbar />
        <Filter doFilter={filterHandler}/>
        <Table data={currentRows} doSort={sortHandler} />
        <Pagination rowsPerPage={rowsPerPage}
                    totalRows={data.length}
                    paginate={paginateHandler} />
      </>}
    </div>
  );
}

export default App;
