import { useEffect, useState } from 'react';

const Graph = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });
  return <div>{data ?? 'loading...'}</div>;
};

export default Graph;
