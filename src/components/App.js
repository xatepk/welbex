import React from 'react';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
// import { useData } from '../hooks/hooks';
import { data } from '../data/data';
import { Table } from './Table';

function App() {
  // const { data, loading, error } = useData();
  const loading = false;
  const error = false;

  return (
    <div className="page">
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <Table data={data}/>
    </div>
  );
}

export default App;
