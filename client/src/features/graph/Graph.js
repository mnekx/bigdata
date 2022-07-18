import { useEffect, useState } from 'react';
import { getData } from '../../helpers/helpers';
import CanvasJSReact from '../../canvasjs-3.6.6/canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = ({ data }) => {
  const [country, setCountry] = useState(data[0]);
  useEffect(() => {
    const newSettings = {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2', // "light1", "dark1", "dark2"
      title: {
        text: 'Life expectancy by year for ' + country['countryName'],
      },
      axisY: {
        title: 'Life Expectancy',
        suffix: ' years',
      },
      axisX: {
        title: 'Year',
        // prefix: 'Y',
        interval: 2,
      },
      data: [
        {
          type: 'line',
          toolTipContent: 'Year {x}: {y}',
          dataPoints: getData(country),
        },
      ],
    };
    console.log(newSettings);
    setSettings(newSettings);
  }, [country]);
  const defaultSettings = {
    animationEnabled: true,
    exportEnabled: true,
    theme: 'light2', // "light1", "dark1", "dark2"
    title: {
      text: 'Life expectancy by year for ' + country['countryName'],
    },
    axisY: {
      title: 'Life Expectancy',
      suffix: ' years',
    },
    axisX: {
      title: 'Year',
      // prefix: 'Y',
      interval: 2,
    },
    data: [
      {
        type: 'line',
        toolTipContent: 'Year {x}: {y}',
        dataPoints: getData(country),
      },
    ],
  };
  const [settings, setSettings] = useState(defaultSettings);

  const handleCountryChange = (e) => {
    const selectedCountry = data.filter(
      (cntry) => cntry['_id'] === e.target.value
    );
    setCountry(selectedCountry);
    setSettings((prevState) => ({
      ...prevState,
      title: { text: 'Life expectancy by year for ' + country['countryName'] },
      data: [
        {
          type: 'line',
          toolTipContent: 'Year {x}: {y}',
          dataPoints: getData(country),
        },
      ],
    }));
  };

  return data ? (
    <section>
      <h2>Graph</h2>
      <div>
        <CanvasJSChart options={settings} />
        <select onChange={(e) => handleCountryChange(e)}>
          {data.map((item) => (
            <option key={item['_id']} value={item['_id']}>
              {item['countryName']}
            </option>
          ))}
        </select>
      </div>
    </section>
  ) : (
    'loading...'
  );
};

export default Graph;
