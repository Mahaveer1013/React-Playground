import { useState } from 'react'
import useFetch from '../components/api/getData';

const Test = () => {
  const [id, setId] = useState(1);
  const { data, loading, error, fetchData } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId((currentId) => currentId + 1)}>
        Increment ID
      </button>
      <button onClick={fetchData}>Fetch Data</button>

      <div>Loading: {loading.toString()}</div>
      <div>{error}</div>
      <div>{data?.toString()}</div>
    </div>
  );
}

export default Test