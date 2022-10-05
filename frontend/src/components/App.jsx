import React, { useState, useEffect, useMemo } from 'react';
import { useCallback } from 'react';

import { rowItemMapping } from '../constants/constants';
import { filterData, sortData } from '../helper/utils';
import { getData } from '../services/transport';
import { ErrorMessage } from './ErrorMessage';
import { Filter } from './Filter';
import { Loader } from './Loader';
import { Navbar } from './NavBar';
import { Pagination } from './Pagination';
import { Table } from './Table';

let initialized = false;

function App() {
  const [rawData, setRawData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(rawData);
  const [error, setError] = useState('');

  const [rowsPerPage] = useState(5);
  const [filtering, setFiltering] = useState({
    namespace: '',
    condition: '',
    value: ''
  });
  const [sorting, setSorting] = useState({
    field: rowItemMapping[0],
    direction: 'NONE',
  });
  let [currentRows, setCurrentRows] = useState([])

  useEffect(() => {
    if (!initialized) {
      initialized = true;
      getData()
        .then((data) => {
          setRawData(data);
        })
        .catch((error) => {
          setError(error);
        })
    }
  }, [initialized]);

  //get current row
  const indexOfLastRow = useMemo(() => currentPage * rowsPerPage, [currentPage, rowsPerPage]);
  const indexOfFirstRow = useMemo(() => indexOfLastRow - rowsPerPage, [indexOfLastRow, rowsPerPage]);

  const resetCurrentPage = useCallback(() => setCurrentPage(1), []);

  useEffect(() => {
    const sortedData = sortData(rawData, sorting)
    setData(sortedData);
    setCurrentRows(sortedData.slice(indexOfFirstRow, indexOfLastRow));
  }, [sorting, rawData]);

  useEffect(() => {
    setCurrentRows(data.slice(indexOfFirstRow, indexOfLastRow));
  }, [indexOfFirstRow, indexOfLastRow]);

  useEffect(() => {
    resetCurrentPage();
    const filteredRows = filterData(rawData, filtering);
    setData(filteredRows);
    setCurrentRows(filteredRows.slice(indexOfFirstRow, indexOfLastRow));
  }, [filtering]);

  return (
    <div className="page">
      {error && <ErrorMessage />}
      {!error && (
        <>
          <Navbar />
          {!rawData.length && initialized ? <Loader /> : (
            <>
              <Filter doFilter={setFiltering}/>
              <Table data={currentRows} sorting={sorting} doSort={setSorting} />
            </>
          )}
          <Pagination rowsPerPage={rowsPerPage}
                      totalRows={data.length}
                      paginate={setCurrentPage}
                      currentPage={currentPage} />
        </>
      )}
    </div>
  );
}

export default App;
