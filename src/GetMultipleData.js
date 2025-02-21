import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetMultipleData = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.all([
          axios.get('https://localhost:7131/Report/GetIRNList'),
          axios.get('https://localhost:7131/Report/GetProductList'),
        ]);

        const [response1, response2] = response;
        console.log('Data1:', response1.data);
        console.log('Data2:', response2.data);
        setData1(response1.data);
        setData2(response2.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetched Data 1</h1>
      <ul>
        {data1.map((item, index) => (
          <li key={index}>{item.inspRepNo}</li>
        ))}
      </ul>
      <h1>Fetched Data 2</h1>
      <ul>
        {data2.map((item, index) => (
          <li key={index}>{item.prodDrgNo}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetMultipleData;
