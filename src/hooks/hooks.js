import { useState, useEffect } from "react";
import axios from "axios";

export function useData() {
  const [data, setData] = useState([]);
  const [dataManual, setDataManual] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchData() {
    try {
      setError('')
      setLoading(true);
      const responce = await axios.get('http://localhost:3000/data');
      setData(responce.data);
      setDataManual(responce.data);
      setLoading(false);

    } catch (e) {
      setLoading(false);
      setError(e.message)

    }

  }

  useEffect(() => {
    fetchData();
  },[])

  return { data, loading, error, setData, dataManual }
}