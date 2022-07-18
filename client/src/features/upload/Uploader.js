import { useState } from 'react';
import Tabler from '../table/Tabler';
import Graph from '../graph/Graph';
import styles from './style.module.css';

const Uploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [data, setData] = useState(null);
  const onFilechange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('bigdata', selectedFile);
    fetch('/api', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className={`${styles.Container}`}>
      <input type='file' onChange={onFilechange} />
      <button type='button' onClick={onFileUpload}>
        upload
      </button>
      {data ? <Tabler data={data} /> : <p>No data yet or loading...</p>}
      {data ? <Graph data={data} /> : <p>No data yet or loading...</p>}
    </div>
  );
};

export default Uploader;
