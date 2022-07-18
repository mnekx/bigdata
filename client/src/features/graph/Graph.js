import { useEffect, useState } from 'react';
import { getData } from '../../helpers/helpers';
import CanvasJSReact from '../../canvasjs-3.6.6/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = ({ data }) => {
  const [country, setCountry] = useState(data[0]);
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
    setSettings(newSettings);
  }, [country]);

  const handleCountryChange = (e) => {
    const selectedCountry = data.filter(
      (cntry) => cntry['_id'] === e.target.value
    );
    setCountry((prevState) => ({
      ...prevState,
      countryCode: selectedCountry[0]['countryCode'],
      countryName: selectedCountry[0]['countryName'],
      indicatorName: selectedCountry[0]['indicatorName'],
      1990: selectedCountry[0][1990],
      1991: selectedCountry[0][1991],
      1992: selectedCountry[0][1992],
      1993: selectedCountry[0][1993],
      1994: selectedCountry[0][1994],
      1995: selectedCountry[0][1995],
      1996: selectedCountry[0][1996],
      1997: selectedCountry[0][1997],
      1998: selectedCountry[0][1998],
      1999: selectedCountry[0][1999],
      2000: selectedCountry[0][2000],
      2001: selectedCountry[0][2001],
      2002: selectedCountry[0][2002],
      2003: selectedCountry[0][2003],
      2004: selectedCountry[0][2004],
      2005: selectedCountry[0][2005],
      2006: selectedCountry[0][2006],
      2007: selectedCountry[0][2007],
      2008: selectedCountry[0][2008],
      2009: selectedCountry[0][2009],
      2010: selectedCountry[0][2010],
      2011: selectedCountry[0][2011],
      2012: selectedCountry[0][2012],
      2013: selectedCountry[0][2013],
      2014: selectedCountry[0][2014],
      2015: selectedCountry[0][2015],
      2016: selectedCountry[0][2016],
      2017: selectedCountry[0][2017],
      2018: selectedCountry[0][2018],
      2019: selectedCountry[0][2019],
      2020: selectedCountry[0][2020],
    }));
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
