import { useState } from "react";
import axios from "axios";

export default function FetchOnClick() {
    const [subscribers, setSubscribers] = useState([]);
    const [subscriberName, setSubscriberName] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get("https://localhost:7131/Subscriber/GetSubscriberById?subscriberId=100");
            console.log("Response Data:", response.data);
            
            // Ensure it's always an array
            setSubscribers(Array.isArray(response.data) ? response.data : [response.data]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <h1>Subscriber List</h1>

            <ul>
                {subscribers.map((subscriber) => (
                    <li key={subscriber.subscriberId || Math.random()}>
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
}
