import React, { useState, useEffect, useMemo } from 'react';

import { rowItemMapping } from '../constants/constants';
import { filter, sortData } from '../helper/utils';
// import { getData } from '../hooks/hooks';
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

  useEffect(() => {
    const sortedData = sortData(rawData, sorting)
    setData(sortedData);
    setCurrentRows(sortedData.slice(indexOfFirstRow, indexOfLastRow));
  }, [sorting, rawData]);

  useEffect(() => {
    setCurrentRows(data.slice(indexOfFirstRow, indexOfLastRow));
  }, [indexOfFirstRow, indexOfLastRow]);

  const filterHandler = (value, nameValue, contidionValue) => {
    if (value && nameValue && contidionValue) {
      setCurrentPage(1);
      const { filterRows } = filter(value, nameValue, contidionValue, rawData);
      setData(filterRows);
      setCurrentRows(filterRows.slice(indexOfFirstRow, indexOfLastRow));
    } else {
      setData(rawData);
      setCurrentRows(rawData.slice(indexOfFirstRow, indexOfLastRow));
    }
  }


  return (
    <div className="page">
      {error && <ErrorMessage />}
      {!error && (
        <>
          <Navbar />
          {!rawData.length && initialized ? <Loader /> : (
            <>
              <Filter doFilter={filterHandler}/>
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
