import {useEffect, useState} from 'react';
import List from './components/List';

const url='https://jsonplaceholder.typicode.com/posts';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const result = await res.json();

    setData(result);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return <div>{!!data.length && <List data={data} />} </div>
}
export default App;
