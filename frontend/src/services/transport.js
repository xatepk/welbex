import axios from 'axios';

export async function getData() {
  try {
    const response = await axios.get('http://localhost:3000/data');
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}