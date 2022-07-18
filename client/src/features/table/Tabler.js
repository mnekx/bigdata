import { useState } from 'react';
import styles from './styles.module.css';

const Tabler = ({ data }) => {
  const [dataToShow, setDataToShow] = useState(data);
  const rows = dataToShow.map((item) => {
    return (
      <tr className={`${styles.Tr}`} key={item['_id']}>
        <td>{item['countryName']}</td>
        <td>{item['countryCode']}</td>
        <td>{item['indicatorName']?.replaceAll('"', '')}</td>
        <td>{item[1990]}</td>
        <td>{item[1991]}</td>
        <td>{item[1992]}</td>
        <td>{item[1993]}</td>
        <td>{item[1994]}</td>
        <td>{item[1995]}</td>
        <td>{item[1996]}</td>
        <td>{item[1997]}</td>
        <td>{item[1998]}</td>
        <td>{item[1999]}</td>
        <td>{item[2000]}</td>
        <td>{item[2001]}</td>
        <td>{item[2002]}</td>
        <td>{item[2003]}</td>
        <td>{item[2004]}</td>
        <td>{item[2005]}</td>
        <td>{item[2006]}</td>
        <td>{item[2007]}</td>
        <td>{item[2008]}</td>
        <td>{item[2009]}</td>
        <td>{item[2010]}</td>
        <td>{item[2011]}</td>
        <td>{item[2012]}</td>
        <td>{item[2013]}</td>
        <td>{item[2014]}</td>
        <td>{item[2015]}</td>
        <td>{item[2016]}</td>
        <td>{item[2017]}</td>
        <td>{item[2018]}</td>
        <td>{item[2019]}</td>
        <td>{item[2020]}</td>
      </tr>
    );
  });
  const handleChange = (e) => {
    const re = new RegExp(e.target.value, 'img');
    const newDataToShow = data.filter(
      (item) => item['countryName'].match(re) !== null
    );
    setDataToShow(newDataToShow);
  };
  return (
    <div className={`${styles.Container}`}>
      <input
        type='text'
        onChange={(e) => handleChange(e)}
        placeholder='search'
      />
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Country Code</th>
            <th>Indicator Name</th>
            <th>1990</th>
            <th>1991</th>
            <th>1992</th>
            <th>1993</th>
            <th>1994</th>
            <th>1995</th>
            <th>1996</th>
            <th>1997</th>
            <th>1998</th>
            <th>1999</th>
            <th>2000</th>
            <th>2001</th>
            <th>2002</th>
            <th>2003</th>
            <th>2004</th>
            <th>2005</th>
            <th>2006</th>
            <th>2007</th>
            <th>2008</th>
            <th>2009</th>
            <th>2010</th>
            <th>2011</th>
            <th>2012</th>
            <th>2013</th>
            <th>2014</th>
            <th>2015</th>
            <th>2016</th>
            <th>2017</th>
            <th>2018</th>
            <th>2019</th>
            <th>2020</th>
          </tr>
        </thead>
        <tbody className={`${styles.TBody}`}>{rows}</tbody>
      </table>
    </div>
  );
};

export default Tabler;
