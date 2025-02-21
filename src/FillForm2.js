import { useState } from "react";

const FillForm2 = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [subscriberName, setSubscriberName] = useState("");

  const fetchData = () => {
    // Fetch subscribers from API (example)
    setSubscribers([
      { subscriberId: 1, subscriberCode: "001", subscriberName: "John Doe", subscriberAddress: "123 Street" },
      { subscriberId: 2, subscriberCode: "002", subscriberName: "Jane Doe", subscriberAddress: "456 Avenue" }
    ]);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      <h1>Subscriber List</h1>

      <ul>
        {subscribers.map(subscriber => (
          <li key={subscriber.subscriberId}>
            <strong>{subscriber.subscriberCode}</strong><br />
            <strong>{subscriber.subscriberName}</strong><br />
            <strong>{subscriber.subscriberAddress}</strong>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          name="subscriberName"
          placeholder="Subscriber Name"
          value={subscriberName}
          onChange={(e) => setSubscriberName(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
    </div>
  );
};

export default FillForm2;
