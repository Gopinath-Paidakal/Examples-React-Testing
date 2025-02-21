import React, { useState, useEffect } from "react";
import axios from "axios";

const GetSubscriberById = () => {
  const [subscribers, setsubscribers] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7131/Subscriber/GetSubscriberById?subscriberId=100")
      .then(response => {
        console.log("Response Data:", response.data); // Log data
        setsubscribers(response.data); // Store data in state
      })
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Subscriber List</h1>
      <ul>
        {subscribers.map(subscriber => (
          <li key={subscriber.subscriberId}>
            <li><strong>{subscriber.subscriberCode}</strong></li>
            <li><strong>{subscriber.subscriberName}</strong></li>  
            <li><strong>{subscriber.subscriberAddress}</strong></li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetSubscriberById;


// <div>
    //   <h1>Get Data</h1>
    //   {data ? (
    //     <div>
    //       <h2>{data.title}</h2>
    //       <p>{data.body}</p>
    //     </div>
    //   ) : (
    //     <p>Loading...</p>
    //   )}
    // </div>