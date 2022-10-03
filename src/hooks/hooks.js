import { useState, useEffect } from "react";
import axios from "axios";

export function useData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  async function fetchProducts() {
    try {
      setError('')
      setLoading(true);
      const responce = await axios.get('https://fakestoreapi.com/products');
      setData(responce.data)
      setLoading(false);

    } catch (e) {
      setLoading(false);
      setError(e.message)

    }

  }

  useEffect(() => {
    fetchProducts();
  },[])

  return { data, loading, error }
}